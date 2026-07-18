import Link from "next/link";
import PublicProjectCard from "@/components/project/PublicProjectCard";
import { getFeaturedProjects } from "@/lib/projects/publicProjectQueries";

export default async function DatabaseFeaturedProjects() {
  let projects = await getFeaturedProjects(3);

  if (projects.length === 0) {
    const {
      getPublishedProjects,
    } = await import(
      "@/lib/projects/publicProjectQueries"
    );

    projects = (
      await getPublishedProjects()
    ).slice(0, 3);
  }

  if (projects.length === 0) {
    return null;
  }

  return (
    <section className="border-y border-[#294638] bg-[#FFFAF0] px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6F8172]">
              Our Work
            </p>

            <h2 className="mt-4 text-4xl md:text-6xl">
              Featured Projects
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-[#233F31]/70">
              Explore youth-led work creating measurable
              environmental and community impact.
            </p>
          </div>

          <Link
            href="/projects"
            className="font-bold underline decoration-2 underline-offset-8"
          >
            Explore All Projects →
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <PublicProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}