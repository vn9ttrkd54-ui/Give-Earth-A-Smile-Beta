import { createClient } from "@/lib/supabase/server";
import {
  convertProjectRow,
  type PublicProject,
  type PublicProjectDatabaseRow,
  type PublicProjectStatistics,
} from "@/lib/projects/publicProjectTypes";

const publicProjectColumns = `
  id,
  slug,
  title,
  subtitle,
  short_description,
  full_description,
  category,
  country,
  city,
  status,
  featured,
  cover_image,
  start_date,
  end_date,
  impact_summary,
  people_reached,
  volunteer_hours,
  volunteers_count,
  goals,
  results,
  created_at,
  updated_at
`;

function cleanSearchText(value: string): string {
  return value
    .replace(/[%_,()]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export async function getPublishedProjects(): Promise<
  PublicProject[]
> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("projects")
    .select(publicProjectColumns)
    .eq("status", "published")
    .order("featured", {
      ascending: false,
    })
    .order("start_date", {
      ascending: false,
      nullsFirst: false,
    })
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    console.error(
      "Unable to load published projects:",
      error.message,
    );

    return [];
  }

  return (
    (data as PublicProjectDatabaseRow[] | null) ?? []
  ).map(convertProjectRow);
}

export async function getFeaturedProjects(
  limit = 3,
): Promise<PublicProject[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("projects")
    .select(publicProjectColumns)
    .eq("status", "published")
    .eq("featured", true)
    .order("start_date", {
      ascending: false,
      nullsFirst: false,
    })
    .order("created_at", {
      ascending: false,
    })
    .limit(limit);

  if (error) {
    console.error(
      "Unable to load featured projects:",
      error.message,
    );

    return [];
  }

  return (
    (data as PublicProjectDatabaseRow[] | null) ?? []
  ).map(convertProjectRow);
}

export async function getPublishedProjectBySlug(
  slug: string,
): Promise<PublicProject | null> {
  const supabase = await createClient();

  const normalizedSlug = slug
    .toLowerCase()
    .trim();

  const { data, error } = await supabase
    .from("projects")
    .select(publicProjectColumns)
    .eq("slug", normalizedSlug)
    .eq("status", "published")
    .maybeSingle();

  if (error) {
    console.error(
      `Unable to load project "${normalizedSlug}":`,
      error.message,
    );

    return null;
  }

  if (!data) {
    return null;
  }

  return convertProjectRow(
    data as PublicProjectDatabaseRow,
  );
}

export async function getRelatedProjects(
  project: PublicProject,
  limit = 3,
): Promise<PublicProject[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("projects")
    .select(publicProjectColumns)
    .eq("status", "published")
    .neq("id", project.id)
    .or(
      `category.eq.${project.category},country.eq.${project.country}`,
    )
    .order("featured", {
      ascending: false,
    })
    .order("created_at", {
      ascending: false,
    })
    .limit(limit);

  if (error) {
    console.error(
      "Unable to load related projects:",
      error.message,
    );

    return [];
  }

  return (
    (data as PublicProjectDatabaseRow[] | null) ?? []
  ).map(convertProjectRow);
}

export async function searchPublishedProjects(
  search: string,
  category: string,
  country: string,
): Promise<PublicProject[]> {
  const supabase = await createClient();

  let query = supabase
    .from("projects")
    .select(publicProjectColumns)
    .eq("status", "published")
    .order("featured", {
      ascending: false,
    })
    .order("created_at", {
      ascending: false,
    });

  const cleanedSearch = cleanSearchText(search);

  if (cleanedSearch) {
    query = query.or(
      [
        `title.ilike.%${cleanedSearch}%`,
        `subtitle.ilike.%${cleanedSearch}%`,
        `short_description.ilike.%${cleanedSearch}%`,
        `category.ilike.%${cleanedSearch}%`,
        `country.ilike.%${cleanedSearch}%`,
        `city.ilike.%${cleanedSearch}%`,
      ].join(","),
    );
  }

  if (category && category !== "all") {
    query = query.eq("category", category);
  }

  if (country && country !== "all") {
    query = query.eq("country", country);
  }

  const { data, error } = await query;

  if (error) {
    console.error(
      "Unable to search projects:",
      error.message,
    );

    return [];
  }

  return (
    (data as PublicProjectDatabaseRow[] | null) ?? []
  ).map(convertProjectRow);
}

export async function getProjectFilterOptions(): Promise<{
  categories: string[];
  countries: string[];
}> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("projects")
    .select("category, country")
    .eq("status", "published");

  if (error) {
    console.error(
      "Unable to load project filters:",
      error.message,
    );

    return {
      categories: [],
      countries: [],
    };
  }

  const rows =
    (data as Array<{
      category: string;
      country: string;
    }> | null) ?? [];

  const categories = Array.from(
    new Set(
      rows
        .map((row) => row.category)
        .filter(Boolean),
    ),
  ).sort((first, second) =>
    first.localeCompare(second),
  );

  const countries = Array.from(
    new Set(
      rows
        .map((row) => row.country)
        .filter(Boolean),
    ),
  ).sort((first, second) =>
    first.localeCompare(second),
  );

  return {
    categories,
    countries,
  };
}

export async function getPublicProjectStatistics(): Promise<
  PublicProjectStatistics
> {
  const projects = await getPublishedProjects();

  const countries = new Set(
    projects
      .map((project) => project.country)
      .filter(Boolean),
  );

  return {
    totalProjects: projects.length,
    totalCountries: countries.size,

    totalPeopleReached: projects.reduce(
      (total, project) =>
        total + project.peopleReached,
      0,
    ),

    totalVolunteerHours: projects.reduce(
      (total, project) =>
        total + project.volunteerHours,
      0,
    ),

    totalVolunteers: projects.reduce(
      (total, project) =>
        total + project.volunteersCount,
      0,
    ),
  };
}