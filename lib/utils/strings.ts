export function normalizeWhitespace(
  value: string,
): string {
  return value.replace(/\s+/g, " ").trim();
}

export function normalizeSlug(
  value: string,
): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function sanitizeSearchText(
  value: string,
): string {
  return normalizeWhitespace(
    value.replace(/[%_,()]/g, " "),
  );
}

export function optionalString(
  value: unknown,
): string | null {
  if (typeof value !== "string") {
    return null;
  }

  const normalized = value.trim();

  return normalized.length > 0
    ? normalized
    : null;
}

export function requiredString(
  value: unknown,
): string {
  return typeof value === "string"
    ? value.trim()
    : "";
}

export function createLocationLabel(
  values: Array<string | null | undefined>,
): string {
  return values
    .filter(
      (
        value,
      ): value is string =>
        typeof value === "string" &&
        value.trim().length > 0,
    )
    .join(", ");
}

export function truncateText(
  value: string,
  maximumLength: number,
): string {
  if (value.length <= maximumLength) {
    return value;
  }

  return `${value.slice(
    0,
    Math.max(0, maximumLength - 1),
  )}…`;
}