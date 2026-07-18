import FadeIn from "@/components/FadeIn";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/data/projects";
import { getRelatedProjects } from "@/lib/projectHelpers";

type RelatedProjectsProps = {
  project: Project;
};

export default function RelatedProjects({
  project,
}: RelatedProjectsProps) {
  const relatedProjects = getRelatedProjects(project);

  if (relatedProjects.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#FFFAF0] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#6F8172]">
            Continue Exploring
          </p>

          <h2 className="mt-5 text-5xl leading-tight md:text-6xl">
            Related Projects
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {relatedProjects.map((relatedProject, index) => (
            <FadeIn
              key={relatedProject.id}
              delay={index * 100}
              className="h-full"
            >
              <ProjectCard project={relatedProject} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}