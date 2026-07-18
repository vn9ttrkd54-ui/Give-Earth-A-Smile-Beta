export type ValidationIssue = {
  field: string;
  message: string;
};

export type ValidationResult<TData> =
  | {
      success: true;
      data: TData;
      issues: [];
    }
  | {
      success: false;
      data: null;
      issues: ValidationIssue[];
    };

export function validationSuccess<TData>(
  data: TData,
): ValidationResult<TData> {
  return {
    success: true,
    data,
    issues: [],
  };
}

export function validationFailure<TData>(
  issues: ValidationIssue[],
): ValidationResult<TData> {
  return {
    success: false,
    data: null,
    issues,
  };
}

export function issuesToFieldErrors(
  issues: ValidationIssue[],
): Record<string, string[]> {
  return issues.reduce<
    Record<string, string[]>
  >((fieldErrors, issue) => {
    const currentErrors =
      fieldErrors[issue.field] ?? [];

    fieldErrors[issue.field] = [
      ...currentErrors,
      issue.message,
    ];

    return fieldErrors;
  }, {});
}

export function isValidUrl(
  value: string,
): boolean {
  if (!value.trim()) {
    return true;
  }

  if (value.startsWith("/")) {
    return true;
  }

  try {
    const parsedUrl = new URL(value);

    return (
      parsedUrl.protocol === "http:" ||
      parsedUrl.protocol === "https:"
    );
  } catch {
    return false;
  }
}

export function isValidIsoDate(
  value: string,
): boolean {
  if (!value.trim()) {
    return true;
  }

  const timestamp = Date.parse(value);

  return !Number.isNaN(timestamp);
}