import type { Metadata } from "next";
import PublicProjectDirectory from "@/components/project/PublicProjectDirectory";
import {
  getProjectFilterOptions,
  searchPublishedProjects,
} from "@/lib/projects/publicProjectQueries";

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

  const [projects, filterOptions] =
    await Promise.all([
      searchPublishedProjects(
        search,
        selectedCategory,
        selectedCountry,
      ),

      getProjectFilterOptions(),
    ]);

  return (
    <main>
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

      <section className="bg-[#F1F6C8] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <PublicProjectDirectory
            projects={projects}
            categories={
              filterOptions.categories
            }
            countries={
              filterOptions.countries
            }
            search={search}
            selectedCategory={
              selectedCategory
            }
            selectedCountry={
              selectedCountry
            }
          />
        </div>
      </section>
    </main>
  );
}