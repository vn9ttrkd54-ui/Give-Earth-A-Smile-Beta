import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PublicProjectCard from "@/components/project/PublicProjectCard";
import {
  getPublishedProjectBySlug,
  getRelatedProjects,
} from "@/lib/projects/publicProjectQueries";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const fallbackImage =
  "/images/projects/project-placeholder.jpg";

function formatProjectDate(
  date: string | null,
): string | null {
  if (!date) {
    return null;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project =
    await getPublishedProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Give Earth a Smile",
    };
  }

  return {
    title: `${project.title} | Give Earth a Smile`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project =
    await getPublishedProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects =
    await getRelatedProjects(project);

  const startDate = formatProjectDate(
    project.startDate,
  );

  const endDate = formatProjectDate(
    project.endDate,
  );

  const location = [
    project.city,
    project.country,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <main>
      <section className="relative min-h-[620px] overflow-hidden bg-[#233F31]">
        <Image
          src={
            project.coverImage ||
            fallbackImage
          }
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#10271D]/65" />

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-end px-6 py-16 text-white md:py-24">
          <div className="max-w-5xl">
            <div className="flex flex-wrap gap-3">
              <span className="border border-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white">
                {project.category}
              </span>

              {location && (
                <span className="bg-[#F1F6C8] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#233F31]">
                  {location}
                </span>
              )}

              {project.featured && (
                <span className="bg-[#233F31] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white">
                  Featured Project
                </span>
              )}
            </div>

            <h1 className="mt-7 text-5xl text-white md:text-7xl">
              {project.title}
            </h1>

            {project.subtitle && (
              <p className="mt-6 max-w-3xl text-xl leading-8 text-white/85">
                {project.subtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#F1F6C8] px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="space-y-10">
            <section className="border border-[#294638] bg-[#FFFAF0] p-7 md:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6F8172]">
                Project Overview
              </p>

              <h2 className="mt-4 text-4xl">
                About This Project
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#233F31]/75">
                {project.fullDescription ||
                  project.shortDescription}
              </p>
            </section>

            {project.impactSummary && (
              <section className="border border-[#294638] bg-[#233F31] p-7 text-white md:p-10">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F1F6C8]">
                  Measured Impact
                </p>

                <h2 className="mt-4 text-4xl text-white">
                  Project Impact
                </h2>

                <p className="mt-6 text-lg leading-8 text-white/80">
                  {project.impactSummary}
                </p>
              </section>
            )}

            {project.goals.length > 0 && (
              <ProjectListSection
                eyebrow="Purpose"
                title="Project Goals"
                items={project.goals}
              />
            )}

            {project.results.length > 0 && (
              <ProjectListSection
                eyebrow="Outcomes"
                title="Project Results"
                items={project.results}
              />
            )}
          </div>

          <aside>
            <div className="sticky top-28 border border-[#294638] bg-[#FFFAF0] p-7">
              <h2 className="text-3xl">
                Project Details
              </h2>

              <dl className="mt-7 divide-y divide-[#294638]/20 border-y border-[#294638]/20">
                <ProjectDetail
                  label="Category"
                  value={project.category}
                />

                <ProjectDetail
                  label="Location"
                  value={
                    location ||
                    project.country
                  }
                />

                {startDate && (
                  <ProjectDetail
                    label="Start date"
                    value={startDate}
                  />
                )}

                {endDate && (
                  <ProjectDetail
                    label="End date"
                    value={endDate}
                  />
                )}
              </dl>

              <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                <ProjectStatistic
                  value={project.peopleReached}
                  label="People Reached"
                />

                <ProjectStatistic
                  value={project.volunteerHours}
                  label="Volunteer Hours"
                />

                <ProjectStatistic
                  value={project.volunteersCount}
                  label="Volunteers"
                />
              </div>

              <Link
                href="/join"
                className="mt-8 block bg-[#233F31] px-6 py-4 text-center font-bold text-white"
              >
                Join Our Work
              </Link>

              <Link
                href="/projects"
                className="mt-3 block border border-[#294638] px-6 py-4 text-center font-bold text-[#233F31]"
              >
                View All Projects
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="border-t border-[#294638] bg-[#FFFAF0] px-6 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6F8172]">
              Continue Exploring
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl">
              Related Projects
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {relatedProjects.map(
                (relatedProject) => (
                  <PublicProjectCard
                    key={relatedProject.id}
                    project={relatedProject}
                  />
                ),
              )}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

type ProjectListSectionProps = {
  eyebrow: string;
  title: string;
  items: string[];
};

function ProjectListSection({
  eyebrow,
  title,
  items,
}: ProjectListSectionProps) {
  return (
    <section className="border border-[#294638] bg-[#FFFAF0] p-7 md:p-10">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6F8172]">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-4xl">
        {title}
      </h2>

      <ul className="mt-7 space-y-4">
        {items.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className="flex gap-4 leading-7 text-[#233F31]/75"
          >
            <span
              aria-hidden="true"
              className="mt-2 h-3 w-3 shrink-0 bg-[#B7CA7F]"
            />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

type ProjectDetailProps = {
  label: string;
  value: string;
};

function ProjectDetail({
  label,
  value,
}: ProjectDetailProps) {
  return (
    <div className="py-5">
      <dt className="text-xs font-bold uppercase tracking-[0.14em] text-[#6F8172]">
        {label}
      </dt>

      <dd className="mt-2 font-semibold">
        {value}
      </dd>
    </div>
  );
}

type ProjectStatisticProps = {
  value: number;
  label: string;
};

function ProjectStatistic({
  value,
  label,
}: ProjectStatisticProps) {
  return (
    <div className="border border-[#294638] bg-[#F1F6C8] p-5 text-center">
      <p className="font-[var(--font-heading)] text-4xl">
        {value.toLocaleString()}
      </p>

      <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-[#233F31]/65">
        {label}
      </p>
    </div>
  );
}