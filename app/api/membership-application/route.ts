import { NextRequest } from "next/server";

type MembershipApplication = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  school?: string;
  city?: string;
  country?: string;
  motivation?: string;
  availability?: string;
  website?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const maxRequestBytes = 16_384;
const rateLimitWindowMs = 15 * 60 * 1000;
const maxRequestsPerWindow = 5;
const maxRateLimitEntries = 5_000;
const allowedAvailability = new Set([
  "",
  "Weekdays",
  "Weekends",
  "Both weekdays and weekends",
  "Varies",
]);

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

function json(data: object, status = 200, extraHeaders?: HeadersInit) {
  return Response.json(data, {
    status,
    headers: {
      "Cache-Control": "no-store, max-age=0",
      ...extraHeaders,
    },
  });
}

function getClientAddress(request: NextRequest): string {
  const forwardedAddress = request.headers
    .get("x-forwarded-for")
    ?.split(",")[0]
    ?.trim();

  return forwardedAddress || request.headers.get("x-real-ip") || "unknown";
}

function checkRateLimit(clientAddress: string) {
  const now = Date.now();

  if (rateLimitStore.size >= maxRateLimitEntries) {
    for (const [address, entry] of rateLimitStore) {
      if (entry.resetAt <= now) {
        rateLimitStore.delete(address);
      }
    }

    while (rateLimitStore.size >= maxRateLimitEntries) {
      const oldestAddress = rateLimitStore.keys().next().value;

      if (typeof oldestAddress !== "string") {
        break;
      }

      rateLimitStore.delete(oldestAddress);
    }
  }

  const currentEntry = rateLimitStore.get(clientAddress);

  if (!currentEntry || currentEntry.resetAt <= now) {
    const resetAt = now + rateLimitWindowMs;
    rateLimitStore.set(clientAddress, { count: 1, resetAt });
    return { allowed: true, resetAt };
  }

  if (currentEntry.count >= maxRequestsPerWindow) {
    return { allowed: false, resetAt: currentEntry.resetAt };
  }

  currentEntry.count += 1;
  return { allowed: true, resetAt: currentEntry.resetAt };
}

function isSameOrigin(request: NextRequest): boolean {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");

  if (!origin || !host) {
    return false;
  }

  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

function cleanSingleLine(value: unknown): string {
  return typeof value === "string"
    ? value.replace(/[\u0000-\u001F\u007F]/g, " ").replace(/\s+/g, " ").trim()
    : "";
}

function cleanMultiline(value: unknown): string {
  return typeof value === "string"
    ? value
        .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
        .trim()
    : "";
}

function hasValidLength(value: unknown, maxLength: number): boolean {
  return typeof value !== "string" || value.length <= maxLength;
}

export async function POST(request: NextRequest) {
  if (!isSameOrigin(request)) {
    return json({ error: "Request origin was not accepted." }, 403);
  }

  const contentType = request.headers.get("content-type")?.toLowerCase() || "";

  if (!contentType.startsWith("application/json")) {
    return json({ error: "Content type must be application/json." }, 415);
  }

  const declaredLength = Number(request.headers.get("content-length") || 0);

  if (declaredLength > maxRequestBytes) {
    return json({ error: "Application data is too large." }, 413);
  }

  const clientAddress = getClientAddress(request);
  const rateLimit = checkRateLimit(clientAddress);

  if (!rateLimit.allowed) {
    const retryAfterSeconds = Math.max(
      1,
      Math.ceil((rateLimit.resetAt - Date.now()) / 1000),
    );

    return json(
      { error: "Too many applications were submitted. Please try again later." },
      429,
      { "Retry-After": String(retryAfterSeconds) },
    );
  }

  let rawBody: string;

  try {
    rawBody = await request.text();
  } catch {
    return json({ error: "Invalid application data." }, 400);
  }

  if (new TextEncoder().encode(rawBody).byteLength > maxRequestBytes) {
    return json({ error: "Application data is too large." }, 413);
  }

  let body: MembershipApplication;

  try {
    const parsedBody: unknown = JSON.parse(rawBody);

    if (!parsedBody || typeof parsedBody !== "object" || Array.isArray(parsedBody)) {
      return json({ error: "Invalid application data." }, 400);
    }

    body = parsedBody as MembershipApplication;
  } catch {
    return json({ error: "Invalid application data." }, 400);
  }

  if (cleanSingleLine(body.website)) {
    return json({ success: true });
  }

  const fieldLengthsAreValid =
    hasValidLength(body.firstName, 80) &&
    hasValidLength(body.lastName, 80) &&
    hasValidLength(body.email, 254) &&
    hasValidLength(body.phone, 40) &&
    hasValidLength(body.school, 160) &&
    hasValidLength(body.city, 100) &&
    hasValidLength(body.country, 100) &&
    hasValidLength(body.motivation, 5000) &&
    hasValidLength(body.availability, 40) &&
    hasValidLength(body.website, 200);

  if (!fieldLengthsAreValid) {
    return json({ error: "One or more fields are too long." }, 400);
  }

  const application = {
    firstName: cleanSingleLine(body.firstName),
    lastName: cleanSingleLine(body.lastName),
    email: cleanSingleLine(body.email).toLowerCase(),
    phone: cleanSingleLine(body.phone),
    school: cleanSingleLine(body.school),
    city: cleanSingleLine(body.city),
    country: cleanSingleLine(body.country),
    motivation: cleanMultiline(body.motivation),
    availability: cleanSingleLine(body.availability),
  };

  if (
    !application.firstName ||
    !application.lastName ||
    !emailPattern.test(application.email) ||
    !application.city ||
    !application.country ||
    !application.motivation ||
    !allowedAvailability.has(application.availability)
  ) {
    return json(
      { error: "Please complete all required fields." },
      400,
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail =
    process.env.MEMBERSHIP_FROM_EMAIL ||
    "Give Earth a Smile <onboarding@resend.dev>";
  const toEmail =
    process.env.MEMBERSHIP_TO_EMAIL || "giveearthasmile@gmail.com";

  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return json(
      { error: "Application email is temporarily unavailable." },
      503,
    );
  }

  const text = [
    "New Give Earth a Smile membership application",
    "",
    `Name: ${application.firstName} ${application.lastName}`,
    `Email: ${application.email}`,
    `Phone: ${application.phone || "Not provided"}`,
    `School: ${application.school || "Not provided"}`,
    `City: ${application.city}`,
    `Country: ${application.country}`,
    `Availability: ${application.availability || "Not provided"}`,
    "",
    "Why they want to join:",
    application.motivation,
  ].join("\n");

  let resendResponse: Response;

  try {
    resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: application.email,
        subject: `Membership application: ${application.firstName} ${application.lastName}`,
        text,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });
  } catch (error) {
    console.error(
      "Resend request failed:",
      error instanceof Error ? error.name : "UnknownError",
    );
    return json({ error: "We could not send your application." }, 502);
  }

  if (!resendResponse.ok) {
    console.error("Resend email error status:", resendResponse.status);
    return json(
      { error: "We could not send your application." },
      502,
    );
  }

  return json({ success: true });
}
