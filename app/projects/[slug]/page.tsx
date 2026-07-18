import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AnimatedCounter from "@/components/AnimatedCounter";
import FadeIn from "@/components/FadeIn";
import ProjectGallery from "@/components/project/ProjectGallery";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectSidebar from "@/components/project/ProjectSidebar";
import ProjectTimeline from "@/components/project/ProjectTimeline";
import RelatedProjects from "@/components/project/RelatedProjects";
import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/data/projects";
import { getProjectBySlug } from "@/lib/projectHelpers";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

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
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <ProjectHero project={project} />

      <ProjectSidebar variant="mobile" />

      <div className="bg-[#FFFAF0] px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[240px_minmax(0,1fr)]">
          <div className="hidden lg:block">
            <ProjectSidebar variant="desktop" />
          </div>

          <div className="min-w-0">
            <section
              id="overview"
              className="scroll-mt-36"
            >
              <FadeIn>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#6F8172]">
                  Project Overview
                </p>

                <h2 className="mt-5 text-5xl leading-tight md:text-6xl">
                  About This Project
                </h2>
              </FadeIn>

              <div className="mt-9 space-y-6">
                {project.fullDescription.map((paragraph, index) => (
                  <FadeIn key={paragraph} delay={index * 70}>
                    <p className="text-lg leading-9 text-[#233F31]/85">
                      {paragraph}
                    </p>
                  </FadeIn>
                ))}
              </div>

              {project.partners.length > 0 && (
                <FadeIn delay={180}>
                  <div className="mt-10 border-l-4 border-[#6F8172] bg-[#F1F6C8] p-7">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6F8172]">
                      Project Partners and Participants
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">
                      {project.partners.map((partner) => (
                        <span
                          key={partner}
                          className="border border-[#294638] bg-[#FFFAF0] px-4 py-3 text-sm font-bold"
                        >
                          {partner}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              )}
            </section>

            <section
              id="statistics"
              className="scroll-mt-36 pt-24"
            >
              <SectionHeader
                eyebrow="Project Impact"
                title="Impact in Numbers"
                description="Current statistics and measurable outcomes connected to this project."
                centered={false}
              />

              <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {project.statistics.map((statistic, index) => (
                  <FadeIn
                    key={statistic.id}
                    delay={index * 80}
                    className="h-full"
                  >
                    <article className="group flex h-full min-h-52 flex-col items-center justify-center border border-[#294638] bg-[#F1F6C8] p-7 text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                      <AnimatedCounter
                        value={statistic.value}
                        className="font-[var(--font-heading)] text-5xl"
                      />

                      <div className="my-5 h-px w-12 bg-[#6F8172] transition-all duration-300 group-hover:w-20" />

                      <p className="font-bold">{statistic.label}</p>
                    </article>
                  </FadeIn>
                ))}
              </div>
            </section>

            <section
              id="goals"
              className="scroll-mt-36 pt-24"
            >
              <SectionHeader
                eyebrow="Purpose and Progress"
                title="Goals and Results"
                centered={false}
              />

              <div className="mt-12 grid gap-8 xl:grid-cols-2">
                <FadeIn direction="right" className="h-full">
                  <article className="h-full border border-[#294638] bg-[#F1F6C8] p-8 md:p-10">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6F8172]">
                      Project Goals
                    </p>

                    <h3 className="mt-4 text-4xl">
                      What We Set Out to Achieve
                    </h3>

                    <div className="mt-8 space-y-5">
                      {project.goals.map((goal, index) => (
                        <div key={goal} className="flex gap-4">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#233F31] text-sm font-bold text-white">
                            {index + 1}
                          </span>

                          <p className="pt-1 leading-7">{goal}</p>
                        </div>
                      ))}
                    </div>
                  </article>
                </FadeIn>

                <FadeIn direction="left" className="h-full">
                  <article className="h-full border border-[#294638] bg-[#233F31] p-8 text-white md:p-10">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B7CA7F]">
                      Project Results
                    </p>

                    <h3 className="mt-4 text-4xl text-white">
                      Progress and Outcomes
                    </h3>

                    <div className="mt-8 space-y-5">
                      {project.results.map((result) => (
                        <div key={result} className="flex gap-4">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#B7CA7F] font-bold text-[#233F31]">
                            ✓
                          </span>

                          <p className="pt-1 leading-7 text-white/85">
                            {result}
                          </p>
                        </div>
                      ))}
                    </div>
                  </article>
                </FadeIn>
              </div>
            </section>

            <section
              id="timeline"
              className="scroll-mt-36 pt-24"
            >
              <SectionHeader
                eyebrow="Project Development"
                title="Project Timeline"
                description="Follow the major stages of the project from its initial planning through implementation and future development."
                centered={false}
              />

              <div className="mt-14">
                <ProjectTimeline timeline={project.timeline} />
              </div>
            </section>

            <section
              id="gallery"
              className="scroll-mt-36 pt-24"
            >
              <SectionHeader
                eyebrow="Project Gallery"
                title="Moments From the Project"
                description="Select an image to open the fullscreen gallery. Use the arrow keys to navigate and Escape to close it."
                centered={false}
              />

              <div className="mt-12">
                <ProjectGallery images={project.gallery} />
              </div>
            </section>

            <section
              id="leadership"
              className="scroll-mt-36 pt-24"
            >
              <SectionHeader
                eyebrow="Project Leadership"
                title="Meet the Team"
                description="The leaders, ambassadors, and organizers contributing to this initiative."
                centered={false}
              />

              <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {project.leaders.map((leader, index) => (
                  <FadeIn
                    key={leader.id}
                    delay={index * 80}
                    className="h-full"
                  >
                    <article className="group h-full overflow-hidden border border-[#294638] bg-[#F1F6C8]">
                      {leader.image ? (
                        <div className="relative aspect-[4/3] overflow-hidden bg-[#E4EBCB]">
                          <Image
                            src={leader.image}
                            alt={leader.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                      ) : (
                        <div className="flex aspect-[4/3] items-center justify-center bg-[#233F31]">
                          <span className="font-[var(--font-heading)] text-6xl text-white">
                            {leader.name
                              .split(" ")
                              .slice(0, 2)
                              .map((part) => part[0])
                              .join("")}
                          </span>
                        </div>
                      )}

                      <div className="p-6">
                        <h3 className="text-2xl">{leader.name}</h3>

                        <p className="mt-3 text-sm font-bold leading-6 text-[#6F8172]">
                          {leader.role}
                        </p>
                      </div>
                    </article>
                  </FadeIn>
                ))}
              </div>
            </section>

            <FadeIn>
              <section className="mt-24 border border-[#294638] bg-[#F1F6C8] p-8 text-center md:p-12">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6F8172]">
                  Support This Work
                </p>

                <h2 className="mt-5 text-4xl md:text-5xl">
                  Help Expand Projects Like This
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8">
                  Join Give Earth a Smile as a volunteer, ambassador, project
                  leader, partner, or supporter.
                </p>

                <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                  <Link
                    href="/join"
                    className="bg-[#233F31] px-9 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#6F8172]"
                  >
                    Join Our Organization
                  </Link>

                  <Link
                    href="/contact"
                    className="border border-[#294638] px-9 py-4 font-bold transition hover:-translate-y-1 hover:bg-[#233F31] hover:text-white"
                  >
                    Contact Our Team
                  </Link>
                </div>
              </section>
            </FadeIn>
          </div>
        </div>
      </div>

      <RelatedProjects project={project} />
    </main>
  );
}