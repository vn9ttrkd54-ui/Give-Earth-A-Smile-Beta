import Image from "next/image";
import Link from "next/link";
import AnimatedCounter from "@/components/AnimatedCounter";
import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { statistics } from "@/data/statistics";
import DatabaseFeaturedProjects from "@/components/home/DatabaseFeaturedProjects";

const programs = [
  {
    title: "Environmental Education",
    text: "Creating resources and educational programs that help students understand sustainability, conservation, and environmental responsibility.",
  },
  {
    title: "Community Service",
    text: "Organizing projects that improve local environments and bring students, families, and volunteers together.",
  },
  {
    title: "International Outreach",
    text: "Connecting ambassadors and communities across countries through collaborative environmental action.",
  },
  {
    title: "Youth Leadership",
    text: "Giving students opportunities to lead initiatives, coordinate teams, and represent their communities.",
  },
  {
    title: "Tree Planting",
    text: "Supporting reforestation, restoration, and community-centered tree planting activities.",
  },
  {
    title: "Humanitarian Support",
    text: "Combining environmental service with projects that support the health and well-being of communities.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="overflow-hidden bg-[#FFFAF0] px-6 py-16 md:py-24">
        <div className="relative mx-auto min-h-[760px] max-w-7xl">
          <FadeIn
            direction="left"
            className="absolute right-0 top-0 h-[650px] w-full overflow-hidden lg:w-3/4"
          >
            <Image
              src="/images/about/about-main.jpg"
              alt="Give Earth a Smile environmental work"
              fill
              sizes="(max-width: 1024px) 100vw, 75vw"
              className="object-cover transition-transform duration-[1400ms] hover:scale-105"
            />
          </FadeIn>

          <FadeIn
            direction="right"
            delay={150}
            className="relative top-28 z-10 max-w-2xl bg-[#F1F6C8] p-9 shadow-xl sm:p-12 md:p-16"
          >
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#6F8172]">
              About Us
            </p>

            <h1 className="mt-5 text-5xl leading-tight md:text-7xl">
              Our Story
            </h1>

            <p className="mt-8 text-lg leading-8">
              Give Earth a Smile is a youth-led environmental organization
              connecting students and communities through education, outreach,
              service, and international collaboration.
            </p>

            <p className="mt-5 text-lg leading-8">
              We believe meaningful environmental progress begins when young
              people are given opportunities to lead, learn, and serve.
            </p>

            <Link
              href="/projects"
              className="mt-9 inline-block bg-[#6F8172] px-9 py-4 font-bold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#233F31] hover:shadow-lg"
            >
              View Our Projects
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#233F31] px-6 py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <FadeIn direction="right">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B7CA7F]">
              Our Mission
            </p>

            <h2 className="mt-5 text-5xl leading-tight md:text-6xl">
              Empowering Youth to Protect Our Planet
            </h2>
          </FadeIn>

          <FadeIn direction="left" delay={120}>
            <p className="text-lg leading-9 text-white/85">
              Our mission is to educate, connect, and empower young people to
              lead environmental and humanitarian initiatives that create
              measurable change in their communities.
            </p>

            <p className="mt-6 text-lg leading-9 text-white/85">
              Through local projects and international partnerships, we help
              students transform environmental awareness into meaningful
              action.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#FFFAF0] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Our Programs"
            title="What We Do"
            description="Our programs give young people practical ways to learn, serve, lead, and collaborate."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <FadeIn
                key={program.title}
                delay={index * 70}
                className="h-full"
              >
                <article className="group flex h-full min-h-80 flex-col border border-[#294638] bg-[#FFFAF0] px-8 py-12 text-center transition duration-300 hover:-translate-y-2 hover:bg-[#F1F6C8] hover:shadow-xl">
                  <p className="font-[var(--font-heading)] text-5xl text-[#6F8172]/45">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-6 text-3xl">{program.title}</h3>

                  <div className="mx-auto my-5 h-px w-12 bg-[#6F8172] transition-all duration-300 group-hover:w-24" />

                  <p className="leading-8">{program.text}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F1F6C8] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Our Progress"
            title="Our Impact in Numbers"
            description="These current values are placeholders and will later be managed through the administrator dashboard."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {statistics.map((statistic, index) => (
              <FadeIn
                key={statistic.id}
                delay={index * 80}
                className="h-full"
              >
                <article className="group flex h-full min-h-56 flex-col items-center justify-center border border-[#294638] bg-[#FFFAF0] p-10 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <AnimatedCounter
                    value={statistic.value}
                    className="font-[var(--font-heading)] text-5xl md:text-6xl"
                  />

                  <div className="my-5 h-px w-12 bg-[#6F8172] transition-all duration-300 group-hover:w-24" />

                  <p className="font-bold">{statistic.label}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFAF0] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Our Work"
            title="Featured Projects"
            description="Explore several of the initiatives being developed by our growing international network."
          />

          <div className="mt-8">
            <DatabaseFeaturedProjects />
          </div>
        </div>
      </section>

      <section className="bg-[#F1F6C8] px-6 py-20 text-center md:py-28">
        <FadeIn className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#6F8172]">
            Join the Movement
          </p>

          <h2 className="mt-5 text-5xl leading-tight md:text-6xl">
            Help Us Build a Greener Future
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8">
            Become a member, ambassador, volunteer, partner, or supporter of
            Give Earth a Smile.
          </p>

          <Link
            href="/join"
            className="mt-10 inline-block bg-[#233F31] px-12 py-4 text-lg font-bold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#6F8172] hover:shadow-lg"
          >
            Join Our Organization
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}