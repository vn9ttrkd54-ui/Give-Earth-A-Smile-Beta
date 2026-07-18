import { createClient } from "@/lib/supabase/server";
import {
  convertAmbassadorRow,
  type Ambassador,
  type AmbassadorDatabaseRow,
  type AmbassadorFilterOptions,
  type AmbassadorStatistics,
} from "@/lib/types/ambassadors";
import {
  uniqueSortedStrings,
} from "@/lib/utils";
import type {
  AmbassadorMapMarker,
} from "@/lib/types/ambassadors";

const publicAmbassadorColumns = `
  id,
  name,
  slug,
  role,
  bio,
  country,
  state,
  city,
  latitude,
  longitude,
  profile_image,
  featured,
  active,
  joined_date,
  display_order,
  created_at,
  updated_at
`;

function convertRows(
  rows:
    | AmbassadorDatabaseRow[]
    | null,
): Ambassador[] {
  return (rows ?? []).map(
    convertAmbassadorRow,
  );
}

export async function getActiveAmbassadors(): Promise<
  Ambassador[]
> {
  const supabase =
    await createClient();

  const { data, error } =
    await supabase
      .from("ambassadors")
      .select(
        publicAmbassadorColumns,
      )
      .eq("active", true)
      .order("display_order", {
        ascending: true,
      })
      .order("name", {
        ascending: true,
      });

  if (error) {
    console.error(
      "Unable to load ambassadors:",
      error.message,
    );

    return [];
  }

  return convertRows(
    data as
      | AmbassadorDatabaseRow[]
      | null,
  );
}

export async function getFeaturedAmbassadors(
  limit = 6,
): Promise<Ambassador[]> {
  const supabase =
    await createClient();

  const safeLimit = Math.max(
    1,
    Math.min(limit, 20),
  );

  const { data, error } =
    await supabase
      .from("ambassadors")
      .select(
        publicAmbassadorColumns,
      )
      .eq("active", true)
      .eq("featured", true)
      .order("display_order", {
        ascending: true,
      })
      .order("name", {
        ascending: true,
      })
      .limit(safeLimit);

  if (error) {
    console.error(
      "Unable to load featured ambassadors:",
      error.message,
    );

    return [];
  }

  return convertRows(
    data as
      | AmbassadorDatabaseRow[]
      | null,
  );
}

export async function getAmbassadorBySlug(
  slug: string,
): Promise<Ambassador | null> {
  const supabase =
    await createClient();

  const normalizedSlug =
    slug.toLowerCase().trim();

  const { data, error } =
    await supabase
      .from("ambassadors")
      .select(
        publicAmbassadorColumns,
      )
      .eq(
        "slug",
        normalizedSlug,
      )
      .eq("active", true)
      .maybeSingle();

  if (error) {
    console.error(
      `Unable to load ambassador "${normalizedSlug}":`,
      error.message,
    );

    return null;
  }

  if (!data) {
    return null;
  }

  return convertAmbassadorRow(
    data as AmbassadorDatabaseRow,
  );
}

export async function getAmbassadorFilterOptions(): Promise<AmbassadorFilterOptions> {
  const ambassadors =
    await getActiveAmbassadors();

  return {
    countries:
      uniqueSortedStrings(
        ambassadors.map(
          (ambassador) =>
            ambassador.country,
        ),
      ),

    roles:
      uniqueSortedStrings(
        ambassadors.map(
          (ambassador) =>
            ambassador.role,
        ),
      ),
  };
}

export async function getAmbassadorStatistics(): Promise<AmbassadorStatistics> {
  const ambassadors =
    await getActiveAmbassadors();

  const countries = new Set(
    ambassadors.map(
      (ambassador) =>
        ambassador.country,
    ),
  );

  const cities = new Set(
    ambassadors
      .map(
        (ambassador) =>
          ambassador.city,
      )
      .filter(Boolean),
  );

  return {
    totalAmbassadors:
      ambassadors.length,

    totalCountries:
      countries.size,

    totalCities:
      cities.size,
  };
}
