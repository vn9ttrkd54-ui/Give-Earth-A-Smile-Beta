import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

function getStatusClasses(status: Project["status"]) {
  switch (status) {
    case "Completed":
      return "bg-[#233F31] text-white";
    case "Active":
      return "bg-[#B7CA7F] text-[#233F31]";
    case "Planning":
      return "bg-[#FFFAF0] text-[#233F31]";
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-[#294638] bg-[#FFFAF0] shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <Link
        href={`/projects/${project.slug}`}
        className="relative block aspect-[4/3] overflow-hidden"
      >
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span
            className={`px-3 py-2 text-[11px] font-bold uppercase tracking-[0.12em] ${getStatusClasses(
              project.status,
            )}`}
          >
            {project.status}
          </span>
        </div>

        <p className="absolute bottom-4 left-4 right-4 text-sm font-bold text-white">
          {project.location}
        </p>
      </Link>

      <div className="flex flex-1 flex-col p-7">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6F8172]">
          {project.category}
        </p>

        <h3 className="mt-4 text-3xl leading-tight">
          <Link href={`/projects/${project.slug}`}>
            {project.title}
          </Link>
        </h3>

        <p className="mt-5 flex-1 leading-7 text-[#233F31]/80">
          {project.shortDescription}
        </p>

        <Link
          href={`/projects/${project.slug}`}
          className="mt-7 inline-flex items-center gap-3 font-bold text-[#233F31]"
        >
          Explore Project
          <span className="transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}