import {
  projects,
  type Project,
  type ProjectCategory,
} from "@/data/projects";

export type PublicProjectStatistics = {
  totalProjects: number;
  totalCountries: number;
  totalPeopleReached: number;
  totalVolunteerHours: number;
  totalVolunteers: number;
};

function normalizeText(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function sortProjects(projectList: Project[]): Project[] {
  return [...projectList].sort((firstProject, secondProject) => {
    if (firstProject.featured !== secondProject.featured) {
      return firstProject.featured ? -1 : 1;
    }

    return firstProject.title.localeCompare(secondProject.title);
  });
}

/*
 * In this code-managed version, every project inside data/projects.ts
 * is considered public. To hide a project, remove it from the array
 * or add a separate published field later.
 */
export async function getPublishedProjects(): Promise<Project[]> {
  return sortProjects(projects);
}

export async function getFeaturedProjects(
  limit = 3,
): Promise<Project[]> {
  return sortProjects(
    projects.filter((project) => project.featured),
  ).slice(0, limit);
}

export async function getPublishedProjectBySlug(
  slug: string,
): Promise<Project | null> {
  const normalizedSlug = normalizeText(slug);

  return (
    projects.find(
      (project) =>
        normalizeText(project.slug) === normalizedSlug,
    ) ?? null
  );
}

export async function getRelatedProjects(
  project: Project,
  limit = 3,
): Promise<Project[]> {
  const relatedProjects = projects.filter(
    (candidateProject) =>
      candidateProject.id !== project.id &&
      (candidateProject.category === project.category ||
        candidateProject.country === project.country),
  );

  return sortProjects(relatedProjects).slice(0, limit);
}

export async function searchPublishedProjects(
  search: string,
  category: string,
  country: string,
): Promise<Project[]> {
  const normalizedSearch = normalizeText(search);

  const matchingProjects = projects.filter((project) => {
    const matchesCategory =
      !category ||
      category === "all" ||
      normalizeText(project.category) ===
        normalizeText(category);

    const matchesCountry =
      !country ||
      country === "all" ||
      normalizeText(project.country) ===
        normalizeText(country);

    const searchableText = normalizeText(
      [
        project.title,
        project.subtitle,
        project.shortDescription,
        project.description,
        project.location,
        project.country,
        project.category,
        project.status,
        ...project.goals,
        ...project.results,
      ].join(" "),
    );

    const matchesSearch =
      !normalizedSearch ||
      searchableText.includes(normalizedSearch);

    return (
      matchesCategory &&
      matchesCountry &&
      matchesSearch
    );
  });

  return sortProjects(matchingProjects);
}

export async function getProjectFilterOptions(): Promise<{
  categories: ProjectCategory[];
  countries: string[];
}> {
  const categories = Array.from(
    new Set(projects.map((project) => project.category)),
  ).sort((first, second) =>
    first.localeCompare(second),
  );

  const countries = Array.from(
    new Set(projects.map((project) => project.country)),
  ).sort((first, second) =>
    first.localeCompare(second),
  );

  return {
    categories,
    countries,
  };
}

function extractStatisticNumber(
  project: Project,
  labelText: string,
): number {
  const statistic = project.statistics.find((item) =>
    item.label
      .toLowerCase()
      .includes(labelText.toLowerCase()),
  );

  if (!statistic) {
    return 0;
  }

  const numericValue = statistic.value.replace(
    /[^0-9.]/g,
    "",
  );

  const result = Number(numericValue);

  return Number.isNaN(result) ? 0 : result;
}

export async function getPublicProjectStatistics(): Promise<PublicProjectStatistics> {
  const countries = new Set(
    projects.map((project) => project.country),
  );

  return {
    totalProjects: projects.length,
    totalCountries: countries.size,

    totalPeopleReached: projects.reduce(
      (total, project) =>
        total +
        extractStatisticNumber(
          project,
          "students impacted",
        ),
      0,
    ),

    totalVolunteerHours: 0,
    totalVolunteers: 0,
  };
}