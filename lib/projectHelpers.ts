import {
  Project,
  ProjectCategory,
  ProjectStatus,
  projects,
} from "@/data/projects";

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectsByCategory(
  category: ProjectCategory,
): Project[] {
  return projects.filter((project) => project.category === category);
}

export function getProjectsByStatus(status: ProjectStatus): Project[] {
  return projects.filter((project) => project.status === status);
}

export function getRelatedProjects(project: Project): Project[] {
  const manuallyRelatedProjects = project.relatedProjectSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((relatedProject): relatedProject is Project =>
      Boolean(relatedProject),
    );

  if (manuallyRelatedProjects.length > 0) {
    return manuallyRelatedProjects;
  }

  return projects
    .filter(
      (candidate) =>
        candidate.slug !== project.slug &&
        candidate.category === project.category,
    )
    .slice(0, 3);
}