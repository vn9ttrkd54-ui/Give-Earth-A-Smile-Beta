import {
  isValidIsoDate,
  isValidUrl,
  validationFailure,
  validationSuccess,
  type ValidationIssue,
  type ValidationResult,
} from "@/lib/validation/shared/validationHelpers";
import {
  normalizeSlug,
  optionalString,
  requiredString,
  safeNonNegativeInteger,
} from "@/lib/utils";
import type {
  PublicProjectStatus,
} from "@/lib/types/projects";

export type ProjectMutationInput = {
  slug: string;
  title: string;
  subtitle: string | null;

  shortDescription: string;
  fullDescription: string | null;

  category: string;

  country: string;
  city: string | null;

  status: PublicProjectStatus;
  featured: boolean;

  coverImage: string | null;

  startDate: string | null;
  endDate: string | null;

  impactSummary: string | null;

  peopleReached: number;
  volunteerHours: number;
  volunteersCount: number;

  goals: string[];
  results: string[];
};

const validStatuses:
  PublicProjectStatus[] = [
    "draft",
    "published",
    "archived",
  ];

function readStringList(
  formData: FormData,
  fieldName: string,
): string[] {
  const rawValue = formData.get(fieldName);

  if (typeof rawValue !== "string") {
    return [];
  }

  return rawValue
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

function readBoolean(
  formData: FormData,
  fieldName: string,
): boolean {
  const value = formData.get(fieldName);

  return (
    value === "true" ||
    value === "on" ||
    value === "1"
  );
}

export function validateProjectFormData(
  formData: FormData,
): ValidationResult<ProjectMutationInput> {
  const rawStatus = requiredString(
    formData.get("status"),
  );

  const status: PublicProjectStatus =
    validStatuses.includes(
      rawStatus as PublicProjectStatus,
    )
      ? (rawStatus as PublicProjectStatus)
      : "draft";

  const input: ProjectMutationInput = {
    slug: normalizeSlug(
      requiredString(
        formData.get("slug"),
      ),
    ),

    title: requiredString(
      formData.get("title"),
    ),

    subtitle: optionalString(
      formData.get("subtitle"),
    ),

    shortDescription: requiredString(
      formData.get(
        "shortDescription",
      ) ??
        formData.get(
          "short_description",
        ),
    ),

    fullDescription: optionalString(
      formData.get(
        "fullDescription",
      ) ??
        formData.get(
          "full_description",
        ),
    ),

    category: requiredString(
      formData.get("category"),
    ),

    country: requiredString(
      formData.get("country"),
    ),

    city: optionalString(
      formData.get("city"),
    ),

    status,

    featured: readBoolean(
      formData,
      "featured",
    ),

    coverImage: optionalString(
      formData.get("coverImage") ??
        formData.get("cover_image"),
    ),

    startDate: optionalString(
      formData.get("startDate") ??
        formData.get("start_date"),
    ),

    endDate: optionalString(
      formData.get("endDate") ??
        formData.get("end_date"),
    ),

    impactSummary: optionalString(
      formData.get(
        "impactSummary",
      ) ??
        formData.get(
          "impact_summary",
        ),
    ),

    peopleReached:
      safeNonNegativeInteger(
        formData.get(
          "peopleReached",
        ) ??
          formData.get(
            "people_reached",
          ),
      ),

    volunteerHours:
      safeNonNegativeInteger(
        formData.get(
          "volunteerHours",
        ) ??
          formData.get(
            "volunteer_hours",
          ),
      ),

    volunteersCount:
      safeNonNegativeInteger(
        formData.get(
          "volunteersCount",
        ) ??
          formData.get(
            "volunteers_count",
          ),
      ),

    goals: readStringList(
      formData,
      "goals",
    ),

    results: readStringList(
      formData,
      "results",
    ),
  };

  const issues: ValidationIssue[] = [];

  if (!input.title) {
    issues.push({
      field: "title",
      message:
        "Project title is required.",
    });
  }

  if (!input.slug) {
    issues.push({
      field: "slug",
      message:
        "Project slug is required.",
    });
  }

  if (!input.shortDescription) {
    issues.push({
      field: "shortDescription",
      message:
        "A short description is required.",
    });
  }

  if (!input.category) {
    issues.push({
      field: "category",
      message:
        "Project category is required.",
    });
  }

  if (!input.country) {
    issues.push({
      field: "country",
      message:
        "Project country is required.",
    });
  }

  if (
    input.coverImage &&
    !isValidUrl(input.coverImage)
  ) {
    issues.push({
      field: "coverImage",
      message:
        "The cover image must be a valid URL or a local path beginning with /.",
    });
  }

  if (
    input.startDate &&
    !isValidIsoDate(input.startDate)
  ) {
    issues.push({
      field: "startDate",
      message:
        "The start date is invalid.",
    });
  }

  if (
    input.endDate &&
    !isValidIsoDate(input.endDate)
  ) {
    issues.push({
      field: "endDate",
      message:
        "The end date is invalid.",
    });
  }

  if (
    input.startDate &&
    input.endDate &&
    new Date(input.endDate).getTime() <
      new Date(
        input.startDate,
      ).getTime()
  ) {
    issues.push({
      field: "endDate",
      message:
        "The end date cannot be before the start date.",
    });
  }

  if (issues.length > 0) {
    return validationFailure(issues);
  }

  return validationSuccess(input);
}