export function uniqueStrings(
  values: Array<
    string | null | undefined
  >,
): string[] {
  return Array.from(
    new Set(
      values
        .filter(
          (
            value,
          ): value is string =>
            typeof value === "string",
        )
        .map((value) => value.trim())
        .filter(Boolean),
    ),
  );
}

export function sortAlphabetically(
  values: string[],
): string[] {
  return [...values].sort(
    (first, second) =>
      first.localeCompare(second),
  );
}

export function uniqueSortedStrings(
  values: Array<
    string | null | undefined
  >,
): string[] {
  return sortAlphabetically(
    uniqueStrings(values),
  );
}

export function ensureStringArray(
  value: unknown,
): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter(
      (
        item,
      ): item is string =>
        typeof item === "string",
    )
    .map((item) => item.trim())
    .filter(Boolean);
}