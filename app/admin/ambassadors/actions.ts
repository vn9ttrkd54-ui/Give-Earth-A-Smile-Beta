"use server";

import {
  revalidatePath,
} from "next/cache";
import {
  redirect,
} from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { requireAdmin } from "@/lib/admin/requireAdmin";
import {
  validateAmbassadorFormData,
} from "@/lib/validation/ambassadors/ambassadorValidation";

function revalidateAmbassadorPages(
  slug?: string,
) {
  revalidatePath("/");
  revalidatePath(
    "/our-impact",
  );
  revalidatePath(
    "/ambassadors",
  );
  revalidatePath(
    "/admin",
  );
  revalidatePath(
    "/admin/ambassadors",
  );

  if (slug) {
    revalidatePath(
      `/ambassadors/${slug}`,
    );
  }
}

export async function createAmbassador(
  formData: FormData,
) {
  const admin =
    await requireAdmin();

  const validation =
    validateAmbassadorFormData(
      formData,
    );

  if (!validation.success) {
    throw new Error(
      validation.issues
        .map(
          (issue) =>
            issue.message,
        )
        .join(" "),
    );
  }

  const input =
    validation.data;

  const supabase =
    await createClient();

  const { error } =
    await supabase
      .from("ambassadors")
      .insert({
        name: input.name,
        slug: input.slug,

        role: input.role,
        bio: input.bio,

        country:
          input.country,
        state: input.state,
        city: input.city,

        latitude:
          input.latitude,
        longitude:
          input.longitude,

        profile_image:
          input.profileImage,

        email: input.email,

        featured:
          input.featured,

        active:
          input.active,

        joined_date:
          input.joinedDate,

        display_order:
          input.displayOrder,

        created_by:
          admin.id,
      });

  if (error) {
    throw new Error(
      `Unable to create ambassador: ${error.message}`,
    );
  }

  revalidateAmbassadorPages(
    input.slug,
  );

  redirect(
    "/admin/ambassadors",
  );
}

export async function updateAmbassador(
  ambassadorId: string,
  formData: FormData,
) {
  await requireAdmin();

  const validation =
    validateAmbassadorFormData(
      formData,
    );

  if (!validation.success) {
    throw new Error(
      validation.issues
        .map(
          (issue) =>
            issue.message,
        )
        .join(" "),
    );
  }

  const input =
    validation.data;

  const supabase =
    await createClient();

  const { error } =
    await supabase
      .from("ambassadors")
      .update({
        name: input.name,
        slug: input.slug,

        role: input.role,
        bio: input.bio,

        country:
          input.country,
        state: input.state,
        city: input.city,

        latitude:
          input.latitude,
        longitude:
          input.longitude,

        profile_image:
          input.profileImage,

        email: input.email,

        featured:
          input.featured,

        active:
          input.active,

        joined_date:
          input.joinedDate,

        display_order:
          input.displayOrder,

        updated_at:
          new Date().toISOString(),
      })
      .eq(
        "id",
        ambassadorId,
      );

  if (error) {
    throw new Error(
      `Unable to update ambassador: ${error.message}`,
    );
  }

  revalidateAmbassadorPages(
    input.slug,
  );

  redirect(
    "/admin/ambassadors",
  );
}

export async function deleteAmbassador(
  ambassadorId: string,
) {
  await requireAdmin();

  const supabase =
    await createClient();

  const { error } =
    await supabase
      .from("ambassadors")
      .delete()
      .eq(
        "id",
        ambassadorId,
      );

  if (error) {
    throw new Error(
      `Unable to delete ambassador: ${error.message}`,
    );
  }

  revalidateAmbassadorPages();
}

export async function toggleAmbassadorActive(
  ambassadorId: string,
  active: boolean,
) {
  await requireAdmin();

  const supabase =
    await createClient();

  const { error } =
    await supabase
      .from("ambassadors")
      .update({
        active,
        updated_at:
          new Date().toISOString(),
      })
      .eq(
        "id",
        ambassadorId,
      );

  if (error) {
    throw new Error(
      `Unable to update ambassador status: ${error.message}`,
    );
  }

  revalidateAmbassadorPages();
}