import {
  validationFailure,
  validationSuccess,
  isValidIsoDate,
  isValidUrl,
  type ValidationIssue,
  type ValidationResult,
} from "@/lib/validation/shared/validationHelpers";
import {
  normalizeSlug,
  optionalString,
  requiredString,
  safeNumber,
  safeNonNegativeInteger,
} from "@/lib/utils";

export type AmbassadorMutationInput = {
  name: string;
  slug: string;

  role: string | null;
  bio: string | null;

  country: string;
  state: string | null;
  city: string | null;

  latitude: number | null;
  longitude: number | null;

  profileImage: string | null;

  email: string | null;

  featured: boolean;
  active: boolean;

  joinedDate: string | null;

  displayOrder: number;
};

function readBoolean(
  formData: FormData,
  fieldName: string,
): boolean {
  const value =
    formData.get(fieldName);

  return (
    value === "true" ||
    value === "on" ||
    value === "1"
  );
}

function readNullableNumber(
  value: FormDataEntryValue | null,
): number | null {
  if (
    typeof value !== "string" ||
    value.trim() === ""
  ) {
    return null;
  }

  const parsed =
    safeNumber(value, NaN);

  return Number.isFinite(parsed)
    ? parsed
    : null;
}

export function validateAmbassadorFormData(
  formData: FormData,
): ValidationResult<AmbassadorMutationInput> {
  const input: AmbassadorMutationInput = {
    name: requiredString(
      formData.get("name"),
    ),

    slug: normalizeSlug(
      requiredString(
        formData.get("slug"),
      ),
    ),

    role: optionalString(
      formData.get("role"),
    ),

    bio: optionalString(
      formData.get("bio"),
    ),

    country: requiredString(
      formData.get("country"),
    ),

    state: optionalString(
      formData.get("state"),
    ),

    city: optionalString(
      formData.get("city"),
    ),

    latitude:
      readNullableNumber(
        formData.get("latitude"),
      ),

    longitude:
      readNullableNumber(
        formData.get("longitude"),
      ),

    profileImage:
      optionalString(
        formData.get(
          "profileImage",
        ) ??
          formData.get(
            "profile_image",
          ),
      ),

    email: optionalString(
      formData.get("email"),
    ),

    featured: readBoolean(
      formData,
      "featured",
    ),

    active: readBoolean(
      formData,
      "active",
    ),

    joinedDate:
      optionalString(
        formData.get(
          "joinedDate",
        ) ??
          formData.get(
            "joined_date",
          ),
      ),

    displayOrder:
      safeNonNegativeInteger(
        formData.get(
          "displayOrder",
        ) ??
          formData.get(
            "display_order",
          ),
      ),
  };

  const issues:
    ValidationIssue[] = [];

  if (!input.name) {
    issues.push({
      field: "name",
      message:
        "Ambassador name is required.",
    });
  }

  if (!input.slug) {
    issues.push({
      field: "slug",
      message:
        "Ambassador slug is required.",
    });
  }

  if (!input.country) {
    issues.push({
      field: "country",
      message:
        "Country is required.",
    });
  }

  if (
    input.latitude !== null &&
    (
      input.latitude < -90 ||
      input.latitude > 90
    )
  ) {
    issues.push({
      field: "latitude",
      message:
        "Latitude must be between -90 and 90.",
    });
  }

  if (
    input.longitude !== null &&
    (
      input.longitude < -180 ||
      input.longitude > 180
    )
  ) {
    issues.push({
      field: "longitude",
      message:
        "Longitude must be between -180 and 180.",
    });
  }

  if (
    input.profileImage &&
    !isValidUrl(
      input.profileImage,
    )
  ) {
    issues.push({
      field: "profileImage",
      message:
        "Profile image must be a valid URL or local path.",
    });
  }

  if (
    input.joinedDate &&
    !isValidIsoDate(
      input.joinedDate,
    )
  ) {
    issues.push({
      field: "joinedDate",
      message:
        "Joined date is invalid.",
    });
  }

  if (issues.length > 0) {
    return validationFailure(
      issues,
    );
  }

  return validationSuccess(
    input,
  );
}