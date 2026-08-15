import type { Metadata } from "next";
import PublicProjectDirectory from "@/components/project/PublicProjectDirectory";
import {
  getAllProjects,
  type Project,
  type ProjectCategory,
} from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Give Earth a Smile",
  description:
    "Explore environmental, educational, sustainability, and humanitarian projects led by Give Earth a Smile.",
};

type ProjectsPageProps = {
  searchParams: Promise<{
    search?: string;
    category?: string;
    country?: string;
  }>;
};

export default async function ProjectsPage({
  searchParams,
}: ProjectsPageProps) {
  const parameters = await searchParams;

  const search =
    parameters.search?.trim() ?? "";

  const selectedCategory =
    parameters.category?.trim() || "all";

  const selectedCountry =
    parameters.country?.trim() || "all";

  const allProjects = getAllProjects();

  const projects = filterProjects(
    allProjects,
    search,
    selectedCategory,
    selectedCountry,
  );

  const categories = Array.from(
    new Set(
      allProjects.map(
        (project) => project.category,
      ),
    ),
  ).sort();

  const countries = Array.from(
    new Set(
      allProjects.map(
        (project) => project.country,
      ),
    ),
  ).sort();

  return (
    <main>
      {/* Hero */}
      <section className="border-b border-[#294638] bg-[#233F31] px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#F1F6C8]">
            Global Environmental Action
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl text-white md:text-7xl">
            Projects Creating Real Change
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/75">
            Explore youth-led projects supporting
            environmental protection, education,
            sustainability, and community service around
            the world.
          </p>
        </div>
      </section>

      {/* Project Directory */}
      <section className="bg-[#F1F6C8] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <PublicProjectDirectory
            projects={projects}
            categories={categories}
            countries={countries}
            search={search}
            selectedCategory={selectedCategory}
            selectedCountry={selectedCountry}
          />
        </div>
      </section>
    </main>
  );
}

function filterProjects(
  projects: Project[],
  search: string,
  category: string,
  country: string,
): Project[] {
  const normalizedSearch =
    search.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesCategory =
      category === "all" ||
      project.category ===
        (category as ProjectCategory);

    const matchesCountry =
      country === "all" ||
      project.country === country;

    const searchableText = [
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
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch =
      normalizedSearch.length === 0 ||
      searchableText.includes(
        normalizedSearch,
      );

    return (
      matchesCategory &&
      matchesCountry &&
      matchesSearch
    );
  });
}