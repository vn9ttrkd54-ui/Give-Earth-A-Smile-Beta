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

function clean(value: unknown, maxLength = 500): string {
  return typeof value === "string"
    ? value.trim().slice(0, maxLength)
    : "";
}

export async function POST(request: NextRequest) {
  let body: MembershipApplication;

  try {
    body = (await request.json()) as MembershipApplication;
  } catch {
    return Response.json({ error: "Invalid application data." }, { status: 400 });
  }

  if (clean(body.website)) {
    return Response.json({ success: true });
  }

  const application = {
    firstName: clean(body.firstName),
    lastName: clean(body.lastName),
    email: clean(body.email),
    phone: clean(body.phone),
    school: clean(body.school),
    city: clean(body.city),
    country: clean(body.country),
    motivation: clean(body.motivation, 5000),
    availability: clean(body.availability),
  };

  if (
    !application.firstName ||
    !application.lastName ||
    !emailPattern.test(application.email) ||
    !application.city ||
    !application.country ||
    !application.motivation
  ) {
    return Response.json(
      { error: "Please complete all required fields." },
      { status: 400 },
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
    return Response.json(
      { error: "Application email is temporarily unavailable." },
      { status: 503 },
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

  const resendResponse = await fetch("https://api.resend.com/emails", {
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
  });

  if (!resendResponse.ok) {
    const providerError = await resendResponse.text();
    console.error("Resend email error:", providerError);
    return Response.json(
      { error: "We could not send your application." },
      { status: 502 },
    );
  }

  return Response.json({ success: true });
}
