import type {
  BaseDatabaseEntity,
  EntityStatus,
} from "@/lib/types/shared/commonTypes";

export type PublicProjectStatus =
  EntityStatus;

export type PublicProject =
  BaseDatabaseEntity & {
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

export type PublicProjectDatabaseRow = {
  id: string;

  slug: string;
  title: string;
  subtitle: string | null;

  short_description: string;
  full_description: string | null;

  category: string;

  country: string;
  city: string | null;

  status: PublicProjectStatus;
  featured: boolean;

  cover_image: string | null;

  start_date: string | null;
  end_date: string | null;

  impact_summary: string | null;

  people_reached: number;
  volunteer_hours: number;
  volunteers_count: number;

  goals: string[] | null;
  results: string[] | null;

  created_at: string;
  updated_at: string;
};

export type PublicProjectStatistics = {
  totalProjects: number;
  totalCountries: number;
  totalPeopleReached: number;
  totalVolunteerHours: number;
  totalVolunteers: number;
};

export type ProjectFilterOptions = {
  categories: string[];
  countries: string[];
};

export type ProjectSearchInput = {
  search?: string;
  category?: string;
  country?: string;
};

export function convertProjectRow(
  row: PublicProjectDatabaseRow,
): PublicProject {
  return {
    id: row.id,

    slug: row.slug,
    title: row.title,
    subtitle: row.subtitle,

    shortDescription:
      row.short_description,
    fullDescription:
      row.full_description,

    category: row.category,

    country: row.country,
    city: row.city,

    status: row.status,
    featured: row.featured,

    coverImage: row.cover_image,

    startDate: row.start_date,
    endDate: row.end_date,

    impactSummary:
      row.impact_summary,

    peopleReached:
      row.people_reached ?? 0,
    volunteerHours:
      row.volunteer_hours ?? 0,
    volunteersCount:
      row.volunteers_count ?? 0,

    goals: row.goals ?? [],
    results: row.results ?? [],

    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}