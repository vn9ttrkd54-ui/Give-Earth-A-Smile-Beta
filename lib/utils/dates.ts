export function formatDate(
  date: string | null | undefined,
  options?: Intl.DateTimeFormatOptions,
): string | null {
  if (!date) {
    return null;
  }

  const parsedDate = new Date(
    date.includes("T")
      ? date
      : `${date}T00:00:00Z`,
  );

  if (Number.isNaN(parsedDate.getTime())) {
    return null;
  }

  return new Intl.DateTimeFormat(
    "en-US",
    options ?? {
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    },
  ).format(parsedDate);
}

export function getCurrentIsoTimestamp(): string {
  return new Date().toISOString();
}

export function compareNewestFirst(
  firstDate: string,
  secondDate: string,
): number {
  return (
    new Date(secondDate).getTime() -
    new Date(firstDate).getTime()
  );
}