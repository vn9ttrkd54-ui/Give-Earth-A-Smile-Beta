import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import FadeIn from "@/components/FadeIn";
import { getProjectBySlug } from "@/data/projects";

export const metadata: Metadata = {
  title: "Santa Cruz Beach Cleanup | Give Earth a Smile",
  description:
    "An education-led cleanup where 18 volunteers collected four bags of trash from Main Beach in Santa Cruz, California.",
};

const implementationPhases = [
  {
    phase: "01",
    title: "Planning and Coordination",
    description:
      "Main Beach was selected, volunteer roles were assigned, supplies were prepared, and safety procedures were established.",
  },
  {
    phase: "02",
    title: "Environmental Education",
    description:
      "Volunteers learned how litter reaches beaches, how it affects coastal ecosystems, and how to participate safely and responsibly.",
  },
  {
    phase: "03",
    title: "Main Beach Cleanup",
    description:
      "Eighteen volunteers worked in teams across the beach and surrounding public areas, collecting four bags of trash.",
  },
  {
    phase: "04",
    title: "Awareness and Reflection",
    description:
      "Participants reflected on the waste they found and shared messages about preventing litter from reaching beaches and the ocean.",
  },
];

const sustainableDevelopmentGoals = [
  {
    number: "12",
    title: "Responsible Consumption and Production",
    image: "/images/sdg/sdg-12.png",
    description:
      "Encouraging responsible disposal habits and greater awareness of how everyday consumption contributes to coastal waste.",
  },
  {
    number: "13",
    title: "Climate Action",
    image: "/images/sdg/sdg-13.png",
    description:
      "Building environmental knowledge and community participation through local, education-led action.",
  },
  {
    number: "17",
    title: "Partnerships for the Goals",
    image: "/images/sdg/sdg-17.png",
    description:
      "Bringing volunteers together around a shared commitment to protecting public spaces and coastal ecosystems.",
  },
];

export default function SantaCruzBeachCleanupPage() {
  const project = getProjectBySlug("santa-cruz-beach-cleanup");

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-[#FFFAF0] text-[#233F31]">
      <section className="bg-[#233F31] px-6 py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <FadeIn>
            <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.16em]">
              <span className="border border-white/35 px-3 py-2">
                {project.category}
              </span>
              <span className="bg-[#F1F6C8] px-3 py-2 text-[#233F31]">
                {project.status}
              </span>
              <span className="border border-white/35 px-3 py-2">
                Santa Cruz, California
              </span>
            </div>

            <p className="mt-7 text-sm font-bold uppercase tracking-[0.3em] text-[#B7CA7F]">
              Community Coastal Action
            </p>

            <h1 className="mt-5 text-5xl text-white md:text-7xl">
              {project.title}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
              {project.subtitle}
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="relative aspect-[4/3] overflow-hidden border border-white/25 bg-[#DDE7BE]">
              <Image
                src={project.coverImage}
                alt="Illustration for the Santa Cruz Beach Cleanup"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_360px]">
          <div className="space-y-14">
            <FadeIn>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6F8172]">
                Project Overview
              </p>
              <h2 className="mt-5 text-4xl md:text-5xl">
                Learning First, Then Taking Action
              </h2>
              <div className="mt-7 space-y-5 text-lg leading-8 text-[#233F31]/75">
                <p>
                  Give Earth a Smile organized a community cleanup at Main
                  Beach in Santa Cruz, California, combining environmental
                  education with direct volunteer service.
                </p>
                <p>
                  The event began with an educational session about beach
                  cleanups, marine litter, volunteer safety, and the effects
                  trash can have on wildlife, water quality, and coastal
                  ecosystems.
                </p>
                <p>
                  After the session, 18 volunteers worked together across the
                  beach and surrounding public areas. They collected four bags
                  of trash while helping spread awareness about beach pollution
                  and the choices that can prevent litter from reaching the
                  ocean.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="border-l-4 border-[#294638] bg-[#F1F6C8] p-7 md:p-9">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6F8172]">
                  Why It Matters
                </p>
                <p className="mt-4 text-xl leading-9">
                  Litter on beaches can be carried into the ocean, break down
                  into smaller plastic fragments, and harm wildlife through
                  ingestion or entanglement. Removing waste creates an
                  immediate benefit; helping people understand the problem can
                  prevent future pollution.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6F8172]">
                Project Process
              </p>
              <h2 className="mt-5 text-4xl">Implementation Phases</h2>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {implementationPhases.map((phase) => (
                  <article
                    key={phase.phase}
                    className="border border-[#294638] bg-white p-6"
                  >
                    <p className="font-[var(--font-heading)] text-4xl text-[#B7CA7F]">
                      {phase.phase}
                    </p>
                    <h3 className="mt-3 text-2xl">{phase.title}</h3>
                    <p className="mt-4 leading-7 text-[#233F31]/70">
                      {phase.description}
                    </p>
                  </article>
                ))}
              </div>
            </FadeIn>

            <FadeIn>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6F8172]">
                Outcomes
              </p>
              <h2 className="mt-5 text-4xl">What the Project Achieved</h2>

              <div className="mt-8 divide-y divide-[#294638]/20 border-y border-[#294638]/20">
                {project.results.map((result, index) => (
                  <div key={result} className="flex gap-5 py-5">
                    <span className="font-[var(--font-heading)] text-2xl text-[#6F8172]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="leading-7">{result}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={120}>
            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <div className="border border-[#294638] bg-[#233F31] p-7 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B7CA7F]">
                  Project Impact
                </p>

                <div className="mt-6 divide-y divide-white/20">
                  {project.statistics.map((statistic) => (
                    <div
                      key={statistic.label}
                      className="py-6 first:pt-0 last:pb-0"
                    >
                      <p className="font-[var(--font-heading)] text-4xl text-[#D9E89C]">
                        {statistic.value}
                      </p>
                      <p className="mt-3 leading-6 text-white/80">
                        {statistic.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-[#294638] bg-white p-7">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6F8172]">
                  Project Details
                </p>
                <dl className="mt-6 space-y-5">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.15em] text-[#233F31]/55">
                      Location
                    </dt>
                    <dd className="mt-1 font-semibold">
                      Main Beach, Santa Cruz, California
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.15em] text-[#233F31]/55">
                      Participants
                    </dt>
                    <dd className="mt-1 font-semibold">18 Volunteers</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.15em] text-[#233F31]/55">
                      Status
                    </dt>
                    <dd className="mt-1 font-semibold">Completed</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.15em] text-[#233F31]/55">
                      Year
                    </dt>
                    <dd className="mt-1 font-semibold">2026</dd>
                  </div>
                </dl>
              </div>

              <div className="border border-[#294638] bg-[#F1F6C8] p-7">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6F8172]">
                  Project File
                </p>
                <h2 className="mt-4 text-3xl">Full Project Profile</h2>
                <p className="mt-4 leading-7 text-[#233F31]/70">
                  Read the project overview, implementation phases, activity
                  plan, and outcomes.
                </p>
                <a
                  href="/files/santa-cruz-beach-cleanup.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 block bg-[#233F31] px-6 py-4 text-center font-bold text-white transition hover:bg-[#6F8172]"
                >
                  Open Project File
                </a>
              </div>
            </aside>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#F1F6C8] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#6F8172]">
              Global Goals
            </p>
            <h2 className="mt-5 text-4xl md:text-5xl">
              UN Sustainable Development Goals
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {sustainableDevelopmentGoals.map((goal, index) => (
              <FadeIn key={goal.number} delay={index * 90} className="h-full">
                <article className="flex h-full flex-col border border-[#294638] bg-[#FFFAF0]">
                  <div className="relative h-48 bg-white">
                    <Image
                      src={goal.image}
                      alt={`UN Sustainable Development Goal ${goal.number}: ${goal.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6F8172]">
                      Goal {goal.number}
                    </p>
                    <h3 className="mt-2 text-2xl">{goal.title}</h3>
                    <p className="mt-4 leading-7 text-[#233F31]/75">
                      {goal.description}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#233F31] px-6 py-16 text-center text-white">
        <FadeIn className="mx-auto max-w-3xl">
          <h2 className="text-4xl text-white">Explore More Projects</h2>
          <p className="mt-5 text-lg leading-8 text-white/70">
            Discover how Give Earth a Smile connects education with practical
            environmental action in communities around the world.
          </p>
          <Link
            href="/projects"
            className="mt-8 inline-flex border border-white px-7 py-4 font-bold transition hover:bg-white hover:text-[#233F31]"
          >
            View All Projects
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}
