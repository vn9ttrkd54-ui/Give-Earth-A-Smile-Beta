import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import FadeIn from "@/components/FadeIn";
import SantaCruzProjectGallery from "@/components/project/SantaCruzProjectGallery";
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
    number: "14",
    title: "Life Below Water",
    image: "/images/sdg/sdg-14.png",
    description:
      "Reducing marine debris and protecting coastal ecosystems by removing litter before it can remain on the shoreline or enter the ocean.",
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
        <FadeIn className="mx-auto max-w-7xl">
          <Link href="/projects" className="mb-10 inline-flex items-center gap-3 border border-white/50 px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#233F31]">
            <span aria-hidden="true">←</span>
            Back to Projects
          </Link>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B7CA7F]">
            Fall 2026 · Main Beach, Santa Cruz, California
          </p>
          <h1 className="mt-5 max-w-5xl text-5xl leading-tight sm:text-6xl md:text-7xl">
              {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
            {project.subtitle}
          </p>
        </FadeIn>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_360px]">
          <div className="space-y-14">
            <FadeIn>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6F8172]">
                Project Article
              </p>
              <div className="mt-8 space-y-5 text-lg leading-8 text-[#233F31]/75">
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
                <p>
                  Awareness was an important part of the effort. The visible
                  presence of volunteers created opportunities to encourage
                  beach visitors to dispose of waste responsibly and recognize
                  the connection between everyday habits and ocean health.
                  These conversations helped extend the project&apos;s impact
                  beyond the material collected during the event.
                </p>
                <p>
                  The Santa Cruz Beach Cleanup reflects Give Earth a
                  Smile&apos;s belief that environmental education is most
                  effective when people can immediately apply what they learn.
                  By combining knowledge, service, and public outreach, the
                  project created a cleaner beach while helping volunteers and
                  community members become more thoughtful stewards of the
                  California coast.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="border-l-4 border-[#6F8172] bg-[#F1F6C8] p-7 md:p-9">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6F8172]">
                  Project Objective
                </p>
                <p className="mt-4 text-lg leading-8">
                  Combine environmental education with direct community
                  service by teaching volunteers about marine litter, safely
                  removing trash from Main Beach, and raising awareness about
                  preventing waste from reaching coastal ecosystems.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <h3 className="text-3xl">Challenges and Opportunities</h3>
              <ul className="mt-6 space-y-4">
                {[
                  "Litter can be carried from heavily used beach areas into Monterey Bay by wind, rain, and waves.",
                  "Plastic and other persistent materials can remain in coastal environments and break into smaller fragments.",
                  "Marine wildlife may ingest debris or become entangled in improperly discarded waste.",
                  "Beach visitors may not recognize how individual disposal habits affect coastal and ocean health.",
                  "A public cleanup provides an opportunity to combine visible service with environmental education.",
                  "Volunteer activity can encourage wider community participation and responsible behavior.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 border-b border-[#294638]/15 pb-4 leading-8"
                  >
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#6F8172]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn>
              <h3 className="text-3xl">Project Solution</h3>
              <ul className="mt-6 space-y-4">
                {[
                  "Begin with an educational session explaining beach pollution and its environmental effects.",
                  "Review volunteer safety, cleanup boundaries, and responsible handling practices.",
                  "Organize 18 volunteers into teams to clean Main Beach and nearby public areas.",
                  "Collect and securely bag visible litter for appropriate disposal.",
                  "Discuss the types of waste found and the ways they can affect wildlife and water quality.",
                  "Spread awareness about preventing trash from reaching beaches and the ocean.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 border-b border-[#294638]/15 pb-4 leading-8"
                  >
                    <span className="mt-1 font-[var(--font-heading)] text-xl text-[#6F8172]">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn>
              <h3 className="text-3xl">Project Benefits</h3>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {[
                  {
                    title: "Cleaner Coastline",
                    text: "Four bags of litter were removed from Main Beach before the waste could remain in the coastal environment or enter the ocean.",
                  },
                  {
                    title: "Volunteer Education",
                    text: "Eighteen volunteers strengthened their understanding of marine debris, wildlife impacts, and safe cleanup practices.",
                  },
                  {
                    title: "Community Awareness",
                    text: "The cleanup created visible opportunities to encourage responsible disposal and explain how beach litter affects ocean health.",
                  },
                  {
                    title: "Youth-Led Action",
                    text: "The project demonstrated how young people can turn environmental knowledge into organized, measurable community service.",
                  },
                ].map((benefit) => (
                  <article
                    key={benefit.title}
                    className="border border-[#294638] bg-[#F1F6C8] p-6"
                  >
                    <h4 className="text-2xl">{benefit.title}</h4>
                    <p className="mt-4 leading-7 text-[#233F31]/75">
                      {benefit.text}
                    </p>
                  </article>
                ))}
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
              <div className="border border-[#294638] bg-[#F1F6C8] p-7">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6F8172]">
                  Project File
                </p>
                <h2 className="mt-4 text-3xl">Full Project Profile</h2>
                <p className="mt-4 leading-7 text-[#233F31]/70">
                  Read the complete project overview, objectives,
                  implementation phases, activity plan, and outcomes.
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
                      Project Type
                    </dt>
                    <dd className="mt-1 font-semibold">Coastal Cleanup</dd>
                  </div>
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
                      Focus
                    </dt>
                    <dd className="mt-1 font-semibold">
                      Marine Conservation &amp; Environmental Education
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.15em] text-[#233F31]/55">
                      Status
                    </dt>
                    <dd className="mt-1 font-semibold">Completed</dd>
                  </div>
                </dl>
              </div>

              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#6F8172]">
                  Project Partners
                </p>

                <div className="space-y-6">
                  <article className="overflow-hidden border border-[#294638] bg-[#FFFAF0]">
                    <div className="relative aspect-[4/3] bg-[#DDE7BE]">
                      <Image
                        src="/images/ambassadors/chloe-cheng.jpg"
                        alt="Chloe Cheng"
                        fill
                        sizes="(max-width: 1024px) 100vw, 32vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-7">
                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6F8172]">
                        Project Lead
                      </p>
                      <h2 className="mt-4 text-3xl">Chloe Cheng</h2>
                      <p className="mt-5 leading-7 text-[#233F31]/70">
                        Chloe Cheng is a senior and Give Earth a Smile
                        ambassador who co-led the Santa Cruz Beach Cleanup,
                        helping connect environmental education with hands-on
                        coastal action.
                      </p>
                    </div>
                  </article>

                  <article className="overflow-hidden border border-[#294638] bg-[#FFFAF0]">
                    <div className="relative aspect-[4/3] bg-[#DDE7BE]">
                      <Image
                        src="/images/ambassadors/aaron-kao.jpg"
                        alt="Aaron Kao"
                        fill
                        sizes="(max-width: 1024px) 100vw, 32vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-7">
                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6F8172]">
                        Project Lead
                      </p>
                      <h2 className="mt-4 text-3xl">Aaron Kao</h2>
                      <p className="mt-5 leading-7 text-[#233F31]/70">
                        Aaron Kao is a senior and Give Earth a Smile ambassador
                        who co-led volunteer coordination and cleanup efforts
                        to protect Main Beach and raise awareness about marine
                        litter.
                      </p>
                    </div>
                  </article>
                </div>
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

      <section className="bg-[#FFFAF0] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#6F8172]">Project Photos</p>
            <h2 className="mt-5 text-4xl md:text-5xl">Santa Cruz Cleanup Gallery</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#233F31]/70">Volunteers learning about beach pollution and taking action at Main Beach in Santa Cruz.</p>
          </FadeIn>
          <FadeIn delay={120} className="mt-10">
            <SantaCruzProjectGallery images={project.gallery} />
          </FadeIn>
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
