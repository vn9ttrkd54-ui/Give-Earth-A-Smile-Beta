"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

function getOptionalString(
  formData: FormData,
  fieldName: string,
) {
  const value = formData.get(fieldName);

  if (typeof value !== "string") {
    return null;
  }

  const cleanedValue = value.trim();

  return cleanedValue || null;
}

export async function updateProfile(
  formData: FormData,
) {
  const supabase = await createClient();

  const { data: claimsData } =
    await supabase.auth.getClaims();

  const userId =
    typeof claimsData?.claims?.sub === "string"
      ? claimsData.claims.sub
      : null;

  if (!userId) {
    redirect("/login");
  }

  const fullName = getOptionalString(
    formData,
    "fullName",
  );

  if (!fullName) {
    redirect(
      "/account?error=Your full name is required.",
    );
  }

  const { error } = await supabase
    .from("profiles")
    .update({
      full_name: fullName,
      country: getOptionalString(
        formData,
        "country",
      ),
      city: getOptionalString(formData, "city"),
      school_or_organization:
        getOptionalString(
          formData,
          "schoolOrOrganization",
        ),
      biography: getOptionalString(
        formData,
        "biography",
      ),
    })
    .eq("id", userId);

  if (error) {
    redirect(
      `/account?error=${encodeURIComponent(
        error.message,
      )}`,
    );
  }

  revalidatePath("/account");

  redirect(
    "/account?success=Your profile has been updated.",
  );
}