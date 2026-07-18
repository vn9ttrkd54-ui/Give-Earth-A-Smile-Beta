export function safeNumber(
  value: unknown,
  fallback = 0,
): number {
  if (
    typeof value === "number" &&
    Number.isFinite(value)
  ) {
    return value;
  }

  if (
    typeof value === "string" &&
    value.trim() !== ""
  ) {
    const parsedValue = Number(value);

    if (Number.isFinite(parsedValue)) {
      return parsedValue;
    }
  }

  return fallback;
}

export function safeNonNegativeInteger(
  value: unknown,
  fallback = 0,
): number {
  const parsedValue = Math.floor(
    safeNumber(value, fallback),
  );

  return Math.max(0, parsedValue);
}

export function calculateTotalPages(
  totalItems: number,
  pageSize: number,
): number {
  if (pageSize <= 0) {
    return 0;
  }

  return Math.ceil(totalItems / pageSize);
}

export function clampNumber(
  value: number,
  minimum: number,
  maximum: number,
): number {
  return Math.min(
    Math.max(value, minimum),
    maximum,
  );
}