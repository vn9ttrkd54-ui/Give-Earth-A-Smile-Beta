import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type PublicProjectCardProps = {
  project?: Project;
};

const fallbackImage =
  "/images/projects/project-placeholder.jpg";

function getStatisticValue(
  project: Project | undefined,
  labelText: string,
): string | null {
  if (!project) {
    return null;
  }

  const statistic = project.statistics.find((item) =>
    item.label
      .toLowerCase()
      .includes(labelText.toLowerCase()),
  );

  return statistic?.value ?? null;
}

export default function PublicProjectCard({
  project,
}: PublicProjectCardProps) {
  if (!project) {
    return null;
  }

  const isMalawi =
    project.slug === "seeds-for-change-malawi";

  const studentsImpacted = isMalawi
    ? project.statistics[2]?.value ?? null
    : getStatisticValue(project, "students impacted") ??
      getStatisticValue(project, "students");

  const secondaryStatistic = isMalawi
    ? project.statistics[1]?.value ?? null
    : getStatisticValue(project, "classes benefiting") ??
      getStatisticValue(project, "classes");

  const secondaryLabel = isMalawi
    ? "Days of environmental education"
    : "Classes benefiting";

  return (
    <article className="group flex h-full flex-col overflow-hidden border border-[#294638] bg-[#FFFAF0] transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`Read more about ${project.title}`}
        className="relative block aspect-[4/3] overflow-hidden bg-[#DDE7BE]"
      >
        <Image
          src={project.coverImage || fallbackImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {project.featured && (
          <span className="absolute left-4 top-4 bg-[#233F31] px-3 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white">
            Featured
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-7">
        <div className="flex flex-wrap gap-2">
          <span className="border border-[#294638]/30 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#233F31]">
            {project.category}
          </span>

          <span className="bg-[#F1F6C8] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#233F31]">
            {project.location}
          </span>

          <span className="border border-[#294638]/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#233F31]/70">
            {project.status}
          </span>
        </div>

        <h2 className="mt-6 text-3xl">
          <Link
            href={`/projects/${project.slug}`}
            className="transition-colors hover:text-[#6F8172]"
          >
            {project.title}
          </Link>
        </h2>

        <p className="mt-3 font-semibold text-[#6F8172]">
          {project.subtitle}
        </p>

        <p className="mt-5 line-clamp-4 leading-7 text-[#233F31]/70">
          {project.shortDescription}
        </p>

        {(studentsImpacted || secondaryStatistic) && (
          <div className="mt-auto grid grid-cols-2 gap-3 border-t border-[#294638]/20 pt-6">
            {studentsImpacted && (
              <div>
                <p className="font-[var(--font-heading)] text-2xl">
                  {studentsImpacted}
                </p>

                <p className="mt-1 text-xs font-bold uppercase tracking-[0.1em] text-[#233F31]/55">
                  Students impacted
                </p>
              </div>
            )}

            {secondaryStatistic && (
              <div>
                <p className="font-[var(--font-heading)] text-2xl">
                  {secondaryStatistic}
                </p>

                <p className="mt-1 text-xs font-bold uppercase tracking-[0.1em] text-[#233F31]/55">
                  {secondaryLabel}
                </p>
              </div>
            )}
          </div>
        )}

        <Link
          href={`/projects/${project.slug}`}
          className="mt-7 inline-flex items-center font-bold text-[#233F31]"
        >
          View Project

          <span className="ml-2 transition-transform group-hover:translate-x-2">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}