import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="border border-[#294638] bg-[#FFFAF0]">
      <div className="relative h-64">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-7">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#6F8172]">
          {project.location}
        </p>

        <h2 className="mt-3 text-3xl">{project.title}</h2>

        <p className="mt-4 leading-7">{project.description}</p>

        <div className="mt-6 border-t border-[#294638]/30 pt-5">
          <p className="font-semibold">Impact</p>
          <p className="mt-2">{project.impact}</p>
        </div>
      </div>
    </article>
  );
}