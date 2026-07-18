export type ProjectStatus =
  | "draft"
  | "published"
  | "archived";

export type DatabaseProject = {
  id: string;

  slug: string;
  title: string;
  subtitle: string | null;
  short_description: string;
  full_description: string | null;

  category: string;
  country: string;
  city: string | null;

  status: ProjectStatus;
  featured: boolean;

  cover_image: string | null;
  start_date: string | null;
  end_date: string | null;

  impact_summary: string | null;
  people_reached: number;
  volunteer_hours: number;
  volunteers_count: number;

  goals: string[];
  results: string[];

  created_by: string | null;
  created_at: string;
  updated_at: string;
};

export type DatabaseProjectFormValues = {
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;

  category: string;
  country: string;
  city: string;

  status: ProjectStatus;
  featured: boolean;

  coverImage: string;
  startDate: string;
  endDate: string;

  impactSummary: string;
  peopleReached: number;
  volunteerHours: number;
  volunteersCount: number;

  goals: string;
  results: string;
};

export function projectToFormValues(
  project: DatabaseProject,
): DatabaseProjectFormValues {
  return {
    slug: project.slug,
    title: project.title,
    subtitle: project.subtitle ?? "",
    shortDescription: project.short_description,
    fullDescription: project.full_description ?? "",

    category: project.category,
    country: project.country,
    city: project.city ?? "",

    status: project.status,
    featured: project.featured,

    coverImage: project.cover_image ?? "",
    startDate: project.start_date ?? "",
    endDate: project.end_date ?? "",

    impactSummary: project.impact_summary ?? "",
    peopleReached: project.people_reached,
    volunteerHours: project.volunteer_hours,
    volunteersCount: project.volunteers_count,

    goals: project.goals.join("\n"),
    results: project.results.join("\n"),
  };
}