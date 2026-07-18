import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { Project } from "@/data/projects";

type ProjectHeroProps = {
  project: Project;
};

function getStatusClasses(status: Project["status"]) {
  switch (status) {
    case "Completed":
      return "bg-white text-[#233F31]";
    case "Active":
      return "bg-[#B7CA7F] text-[#233F31]";
    case "Planning":
      return "bg-[#FFFAF0] text-[#233F31]";
  }
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="relative flex min-h-[720px] items-end overflow-hidden">
      <Image
        src={project.coverImage}
        alt={project.title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/90" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-40 text-white md:pb-24">
        <FadeIn direction="down">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-white/80 transition hover:text-white"
          >
            ← All Projects
          </Link>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mt-8 flex flex-wrap gap-3">
            <span
              className={`px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] ${getStatusClasses(
                project.status,
              )}`}
            >
              {project.status}
            </span>

            <span className="border border-white/60 bg-black/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] backdrop-blur-sm">
              {project.category}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={180}>
          <h1 className="mt-7 max-w-5xl text-5xl leading-tight sm:text-6xl md:text-7xl lg:text-8xl">
            {project.title}
          </h1>
        </FadeIn>

        <FadeIn delay={260}>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-white/90">
            {project.subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={340}>
          <div className="mt-9 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/30 pt-7">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                Location
              </p>
              <p className="mt-2 font-semibold">{project.location}</p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                Date
              </p>
              <p className="mt-2 font-semibold">
                {project.endDate &&
                project.endDate !== project.startDate
                  ? `${project.startDate} – ${project.endDate}`
                  : project.startDate}
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                Country
              </p>
              <p className="mt-2 font-semibold">{project.country}</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}