"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/admin/requireAdmin";
import { createClient } from "@/lib/supabase/server";
import type {
  ProjectStatus,
} from "@/lib/types/databaseProject";

type ProjectMutationResult = {
  success: boolean;
  message: string;
};

function getString(
  formData: FormData,
  fieldName: string,
): string {
  const value = formData.get(fieldName);

  return typeof value === "string"
    ? value.trim()
    : "";
}

function getOptionalString(
  formData: FormData,
  fieldName: string,
): string | null {
  const value = getString(
    formData,
    fieldName,
  );

  return value.length > 0 ? value : null;
}

function getNonnegativeInteger(
  formData: FormData,
  fieldName: string,
): number {
  const rawValue = getString(
    formData,
    fieldName,
  );

  if (!rawValue) {
    return 0;
  }

  const numericValue = Number(rawValue);

  if (
    !Number.isInteger(numericValue) ||
    numericValue < 0
  ) {
    return 0;
  }

  return numericValue;
}

function getBoolean(
  formData: FormData,
  fieldName: string,
): boolean {
  return formData.get(fieldName) === "on";
}

function getLineArray(
  formData: FormData,
  fieldName: string,
): string[] {
  return getString(formData, fieldName)
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

function normalizeSlug(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function getStatus(
  formData: FormData,
): ProjectStatus {
  const status = getString(
    formData,
    "status",
  );

  if (
    status === "published" ||
    status === "archived"
  ) {
    return status;
  }

  return "draft";
}

function getProjectInput(
  formData: FormData,
  adminId: string,
) {
  const title = getString(
    formData,
    "title",
  );

  const suppliedSlug = getString(
    formData,
    "slug",
  );

  const slug = normalizeSlug(
    suppliedSlug || title,
  );

  return {
    slug,
    title,
    subtitle: getOptionalString(
      formData,
      "subtitle",
    ),

    short_description: getString(
      formData,
      "shortDescription",
    ),

    full_description: getOptionalString(
      formData,
      "fullDescription",
    ),

    category: getString(
      formData,
      "category",
    ),

    country: getString(
      formData,
      "country",
    ),

    city: getOptionalString(
      formData,
      "city",
    ),

    status: getStatus(formData),

    featured: getBoolean(
      formData,
      "featured",
    ),

    cover_image: getOptionalString(
      formData,
      "coverImage",
    ),

    start_date: getOptionalString(
      formData,
      "startDate",
    ),

    end_date: getOptionalString(
      formData,
      "endDate",
    ),

    impact_summary: getOptionalString(
      formData,
      "impactSummary",
    ),

    people_reached: getNonnegativeInteger(
      formData,
      "peopleReached",
    ),

    volunteer_hours:
      getNonnegativeInteger(
        formData,
        "volunteerHours",
      ),

    volunteers_count:
      getNonnegativeInteger(
        formData,
        "volunteersCount",
      ),

    goals: getLineArray(
      formData,
      "goals",
    ),

    results: getLineArray(
      formData,
      "results",
    ),

    created_by: adminId,
  };
}

function validateProjectInput(
  input: ReturnType<typeof getProjectInput>,
): string | null {
  if (!input.title) {
    return "Project title is required.";
  }

  if (!input.slug) {
    return "A valid project slug is required.";
  }

  if (
    !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(
      input.slug,
    )
  ) {
    return "The project slug is invalid.";
  }

  if (!input.short_description) {
    return "A short description is required.";
  }

  if (!input.category) {
    return "Project category is required.";
  }

  if (!input.country) {
    return "Project country is required.";
  }

  if (
    input.start_date &&
    input.end_date &&
    input.end_date < input.start_date
  ) {
    return "The end date cannot be before the start date.";
  }

  return null;
}

export async function createProject(
  previousState: ProjectMutationResult,
  formData: FormData,
): Promise<ProjectMutationResult> {
  const admin = await requireAdmin();
  const supabase = await createClient();

  const input = getProjectInput(
    formData,
    admin.id,
  );

  const validationError =
    validateProjectInput(input);

  if (validationError) {
    return {
      success: false,
      message: validationError,
    };
  }

  const { data, error } = await supabase
    .from("projects")
    .insert(input)
    .select("id")
    .single();

  if (error) {
    if (error.code === "23505") {
      return {
        success: false,
        message:
          "Another project already uses this slug.",
      };
    }

    return {
      success: false,
      message: error.message,
    };
  }

  revalidatePath("/admin");
  revalidatePath("/admin/projects");
  revalidatePath("/projects");

  redirect(
    `/admin/projects/${data.id}/edit?success=${encodeURIComponent(
      "Project created successfully.",
    )}`,
  );
}

export async function updateProject(
  projectId: string,
  previousState: ProjectMutationResult,
  formData: FormData,
): Promise<ProjectMutationResult> {
  const admin = await requireAdmin();
  const supabase = await createClient();

  const input = getProjectInput(
    formData,
    admin.id,
  );

  const validationError =
    validateProjectInput(input);

  if (validationError) {
    return {
      success: false,
      message: validationError,
    };
  }

  const updateInput = {
    slug: input.slug,
    title: input.title,
    subtitle: input.subtitle,
    short_description:
        input.short_description,
    full_description:
        input.full_description,

    category: input.category,
    country: input.country,
    city: input.city,

    status: input.status,
    featured: input.featured,

    cover_image: input.cover_image,
    start_date: input.start_date,
    end_date: input.end_date,

    impact_summary:
        input.impact_summary,
    people_reached:
        input.people_reached,
    volunteer_hours:
        input.volunteer_hours,
    volunteers_count:
        input.volunteers_count,

    goals: input.goals,
    results: input.results,
  };

  const { error } = await supabase
    .from("projects")
    .update(updateInput)
    .eq("id", projectId);

  if (error) {
    if (error.code === "23505") {
      return {
        success: false,
        message:
          "Another project already uses this slug.",
      };
    }

    return {
      success: false,
      message: error.message,
    };
  }

  revalidatePath("/admin");
  revalidatePath("/admin/projects");
  revalidatePath(
    `/admin/projects/${projectId}/edit`,
  );
  revalidatePath("/projects");
  revalidatePath(`/projects/${input.slug}`);

  return {
    success: true,
    message: "Project updated successfully.",
  };
}

export async function deleteProject(
  projectId: string,
): Promise<void> {
  await requireAdmin();

  const supabase = await createClient();

  const { error } = await supabase
    .from("projects")
    .delete()
    .eq("id", projectId);

  if (error) {
    redirect(
      `/admin/projects?error=${encodeURIComponent(
        error.message,
      )}`,
    );
  }

  revalidatePath("/admin");
  revalidatePath("/admin/projects");
  revalidatePath("/projects");

  redirect(
    `/admin/projects?success=${encodeURIComponent(
      "Project deleted successfully.",
    )}`,
  );
}

export async function toggleProjectPublished(
  projectId: string,
  currentStatus: ProjectStatus,
): Promise<void> {
  await requireAdmin();

  const supabase = await createClient();

  const nextStatus =
    currentStatus === "published"
      ? "draft"
      : "published";

  const { error } = await supabase
    .from("projects")
    .update({
      status: nextStatus,
    })
    .eq("id", projectId);

  if (error) {
    redirect(
      `/admin/projects?error=${encodeURIComponent(
        error.message,
      )}`,
    );
  }

  revalidatePath("/admin");
  revalidatePath("/admin/projects");
  revalidatePath("/projects");

  redirect("/admin/projects");
}