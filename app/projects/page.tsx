import FadeIn from "@/components/FadeIn";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import { getAllProjects } from "@/lib/projectHelpers";

export default function ProjectsPage() {
  const projects = getAllProjects();

  const activeProjects = projects.filter(
    (project) => project.status === "Active",
  );

  const completedProjects = projects.filter(
    (project) => project.status === "Completed",
  );

  const plannedProjects = projects.filter(
    (project) => project.status === "Planning",
  );

  return (
    <main>
      <section className="bg-[#233F31] px-6 py-20 text-white md:py-28">
        <FadeIn className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B7CA7F]">
            Taking Action
          </p>

          <h1 className="mt-5 text-5xl leading-tight sm:text-6xl md:text-7xl">
            Our Projects
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/85">
            Explore environmental education, community service, humanitarian,
            and international outreach projects led by Give Earth a Smile.
          </p>
        </FadeIn>
      </section>

      <section className="bg-[#F1F6C8] px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <FadeIn>
            <article className="border border-[#294638] bg-[#FFFAF0] p-7 text-center">
              <p className="font-[var(--font-heading)] text-5xl">
                {projects.length}
              </p>
              <p className="mt-3 font-bold">Total Projects</p>
            </article>
          </FadeIn>

          <FadeIn delay={70}>
            <article className="border border-[#294638] bg-[#FFFAF0] p-7 text-center">
              <p className="font-[var(--font-heading)] text-5xl">
                {activeProjects.length}
              </p>
              <p className="mt-3 font-bold">Active</p>
            </article>
          </FadeIn>

          <FadeIn delay={140}>
            <article className="border border-[#294638] bg-[#FFFAF0] p-7 text-center">
              <p className="font-[var(--font-heading)] text-5xl">
                {completedProjects.length}
              </p>
              <p className="mt-3 font-bold">Completed</p>
            </article>
          </FadeIn>

          <FadeIn delay={210}>
            <article className="border border-[#294638] bg-[#FFFAF0] p-7 text-center">
              <p className="font-[var(--font-heading)] text-5xl">
                {plannedProjects.length}
              </p>
              <p className="mt-3 font-bold">In Planning</p>
            </article>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#FFFAF0] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Project Directory"
            title="Explore Our Work"
            description="Select a project to view its goals, timeline, results, gallery, statistics, and leadership."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <FadeIn
                key={project.id}
                delay={(index % 3) * 100}
                className="h-full"
              >
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}