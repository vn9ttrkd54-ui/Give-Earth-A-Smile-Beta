import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import FadeIn from "@/components/FadeIn";
import ReLeafProjectGallery from "@/components/project/ReLeafProjectGallery";
import { getProjectBySlug } from "@/data/projects";

export const metadata: Metadata = {
  title: "The Re-Leaf Project | Give Earth a Smile",
  description:
    "An ongoing recycling awareness campaign using weekly public education and campaign cards made from 100% recycled paper.",
};

const implementationPhases = [
  {
    phase: "01",
    title: "Research and Planning",
    description:
      "Identify common recycling questions and misconceptions, research clear guidance, and plan the weekly publishing schedule.",
  },
  {
    phase: "02",
    title: "Content and Card Design",
    description:
      "Turn accurate recycling guidance into concise social media posts and practical recycling facts campaign cards.",
  },
  {
    phase: "03",
    title: "Responsible Production",
    description:
      "Produce cards from 100% recycled paper derived from leftover sawmill wood chips without harvesting new trees.",
  },
  {
    phase: "04",
    title: "Education and Distribution",
    description:
      "Publish educational content weekly, distribute campaign cards, and use public questions to shape future topics.",
  },
];

const sustainableDevelopmentGoals = [
  {
    number: "12",
    title: "Responsible Consumption and Production",
    image: "/images/sdg/sdg-12.png",
    description:
      "Helping people sort waste responsibly while demonstrating circular material use through 100% recycled campaign cards.",
  },
  {
    number: "13",
    title: "Climate Action",
    image: "/images/sdg/sdg-13.png",
    description:
      "Encouraging sustainable habits that conserve resources and reduce the environmental costs associated with waste.",
  },
  {
    number: "15",
    title: "Life on Land",
    image: "/images/sdg/sdg-15.png",
    description:
      "Avoiding the harvest of new trees for campaign materials and promoting more thoughtful use of natural resources.",
  },
  {
    number: "17",
    title: "Partnerships for the Goals",
    image: "/images/sdg/sdg-17.png",
    description:
      "Working with Terracare to extend practical recycling education through shared outreach and campaign materials.",
  },
];

export default function ReLeafProjectPage() {
  const project = getProjectBySlug("the-re-leaf-project");

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
            Fall 2026 · Online and Community Outreach
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
                  Give Earth a Smile partnered with Terracare to create The
                  Re-Leaf Project, an ongoing recycling awareness campaign
                  designed to make sustainable recycling practices easier for
                  the public to understand and apply.
                </p>
                <p>
                  Recycling can become confusing when rules differ between
                  communities or when packaging contains mixed materials.
                  Items placed in the wrong bin can contaminate recyclable
                  material, so clear education is an important part of making
                  recycling systems work effectively.
                </p>
                <p>
                  The campaign responds with weekly social media posts that
                  explain what to recycle, what not to recycle, and why correct
                  sorting matters. Repeated digital outreach gives the public
                  practical information that can be shared and revisited.
                </p>
                <p>
                  The project also creates recycling facts campaign cards as
                  tangible educational reminders. More than 100 cards have
                  been made and distributed, extending the campaign beyond
                  social media and into everyday community spaces.
                </p>
                <p>
                  Each card is made from 100% recycled paper derived from waste
                  leftover sawmill wood chips. No new trees are harvested in
                  the card-making process, allowing the campaign materials to
                  demonstrate the responsible practices they promote.
                </p>
                <p>
                  Together, Give Earth a Smile and Terracare combine ongoing
                  education, responsible production, and community outreach.
                  The result is a campaign that encourages better recycling
                  decisions while showing how thoughtful material choices can
                  reduce environmental impact.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="border-l-4 border-[#6F8172] bg-[#F1F6C8] p-7 md:p-9">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6F8172]">
                  Project Objective
                </p>
                <p className="mt-4 text-lg leading-8">
                  Build public understanding of sustainable recycling through
                  recurring digital education and low-impact campaign cards
                  that clearly explain what can and cannot be recycled.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <h3 className="text-3xl">Challenges and Opportunities</h3>
              <ul className="mt-6 space-y-4">
                {[
                  "Recycling rules and packaging labels can be confusing.",
                  "Incorrectly sorted items can contaminate recyclable materials.",
                  "Online information may disappear quickly from public attention.",
                  "Printed awareness materials can create waste when made from virgin paper.",
                  "Recurring education can turn uncertainty into more responsible everyday habits.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4 border-b border-[#294638]/15 pb-4 leading-8">
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
                  "Publish one educational social media post every week.",
                  "Explain common recyclable and non-recyclable items in clear language.",
                  "Create physical recycling facts cards as lasting reminders.",
                  "Use paper made entirely from recycled sawmill wood-chip waste.",
                  "Distribute cards through community outreach with Terracare.",
                  "Use audience questions to guide future educational topics.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4 border-b border-[#294638]/15 pb-4 leading-8">
                    <span className="mt-1 font-[var(--font-heading)] text-xl text-[#6F8172]">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn>
              <h3 className="text-3xl">Project Benefits</h3>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {[
                  { title: "Clearer Recycling", text: "Practical guidance helps the public understand what belongs in recycling and what should be kept out." },
                  { title: "Ongoing Education", text: "Weekly posts keep sustainable recycling visible instead of limiting awareness to a one-time campaign." },
                  { title: "Responsible Materials", text: "Campaign cards use 100% recycled paper made from leftover sawmill wood chips." },
                  { title: "Broader Outreach", text: "More than 100 distributed cards bring useful recycling information into community spaces." },
                ].map((benefit) => (
                  <article key={benefit.title} className="border border-[#294638] bg-[#F1F6C8] p-6">
                    <h4 className="text-2xl">{benefit.title}</h4>
                    <p className="mt-4 leading-7 text-[#233F31]/75">{benefit.text}</p>
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
                  Recycling succeeds when people have clear information and
                  materials are designed with their full life cycle in mind.
                  The Re-Leaf Project teaches both principles through its
                  message and its own production choices.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6F8172]">Project Process</p>
              <h2 className="mt-5 text-4xl">Implementation Phases</h2>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {implementationPhases.map((phase) => (
                  <article key={phase.phase} className="border border-[#294638] bg-white p-6">
                    <p className="font-[var(--font-heading)] text-4xl text-[#B7CA7F]">{phase.phase}</p>
                    <h3 className="mt-3 text-2xl">{phase.title}</h3>
                    <p className="mt-4 leading-7 text-[#233F31]/70">{phase.description}</p>
                  </article>
                ))}
              </div>
            </FadeIn>

            <FadeIn>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6F8172]">Progress</p>
              <h2 className="mt-5 text-4xl">What the Project Has Achieved</h2>
              <div className="mt-8 divide-y divide-[#294638]/20 border-y border-[#294638]/20">
                {project.results.map((result, index) => (
                  <div key={result} className="flex gap-5 py-5">
                    <span className="font-[var(--font-heading)] text-2xl text-[#6F8172]">{String(index + 1).padStart(2, "0")}</span>
                    <p className="leading-7">{result}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={120}>
            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <div className="border border-[#294638] bg-[#F1F6C8] p-7">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6F8172]">Project File</p>
                <h2 className="mt-4 text-3xl">Coming Soon</h2>
              </div>

              <div className="border border-[#294638] bg-[#233F31] p-7 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B7CA7F]">Project Impact</p>
                <div className="mt-6 divide-y divide-white/20">
                  {project.statistics.map((statistic) => (
                    <div key={statistic.label} className="py-6 first:pt-0 last:pb-0">
                      <p className="font-[var(--font-heading)] text-4xl text-[#D9E89C]">{statistic.value}</p>
                      <p className="mt-3 leading-6 text-white/80">{statistic.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-[#294638] bg-[#FFFAF0] p-7">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6F8172]">Project Details</p>
                <dl className="mt-6 space-y-5">
                  <div><dt className="text-xs font-bold uppercase tracking-[0.15em] text-[#233F31]/55">Partner</dt><dd className="mt-1 font-semibold">Terracare</dd></div>
                  <div><dt className="text-xs font-bold uppercase tracking-[0.15em] text-[#233F31]/55">Project Type</dt><dd className="mt-1 font-semibold">Recycling Awareness Campaign</dd></div>
                  <div><dt className="text-xs font-bold uppercase tracking-[0.15em] text-[#233F31]/55">Location</dt><dd className="mt-1 font-semibold">Online and Community Outreach</dd></div>
                  <div><dt className="text-xs font-bold uppercase tracking-[0.15em] text-[#233F31]/55">Focus</dt><dd className="mt-1 font-semibold">Sustainable Recycling &amp; Public Education</dd></div>
                  <div><dt className="text-xs font-bold uppercase tracking-[0.15em] text-[#233F31]/55">Status</dt><dd className="mt-1 font-semibold">Ongoing</dd></div>
                </dl>
              </div>
            </aside>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#F1F6C8] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#6F8172]">Global Goals</p>
            <h2 className="mt-5 text-4xl md:text-5xl">UN Sustainable Development Goals</h2>
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {sustainableDevelopmentGoals.map((goal, index) => (
              <FadeIn key={goal.number} delay={index * 90} className="h-full">
                <article className="flex h-full flex-col border border-[#294638] bg-[#FFFAF0]">
                  <div className="relative h-48 bg-white"><Image src={goal.image} alt={`UN Sustainable Development Goal ${goal.number}: ${goal.title}`} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-contain p-4" /></div>
                  <div className="flex-1 p-6"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6F8172]">Goal {goal.number}</p><h3 className="mt-2 text-2xl">{goal.title}</h3><p className="mt-4 leading-7 text-[#233F31]/75">{goal.description}</p></div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFAF0] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#6F8172]">Campaign Materials</p>
            <h2 className="mt-5 text-4xl md:text-5xl">The Re-Leaf Project Gallery</h2>
          </FadeIn>
          <FadeIn delay={120} className="mt-10"><ReLeafProjectGallery images={project.gallery} /></FadeIn>
        </div>
      </section>

      <section className="bg-[#233F31] px-6 py-16 text-center text-white">
        <FadeIn className="mx-auto max-w-3xl">
          <h2 className="text-4xl text-white">Explore More Projects</h2>
          <p className="mt-5 text-lg leading-8 text-white/70">Discover how Give Earth a Smile connects education with practical environmental action in communities around the world.</p>
          <Link href="/projects" className="mt-8 inline-flex border border-white px-7 py-4 font-bold transition hover:bg-white hover:text-[#233F31]">View All Projects</Link>
        </FadeIn>
      </section>
    </main>
  );
}
