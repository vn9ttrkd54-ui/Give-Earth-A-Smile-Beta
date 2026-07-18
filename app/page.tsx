import Image from "next/image";
import Link from "next/link";
import AnimatedCounter from "@/components/AnimatedCounter";
import FadeIn from "@/components/FadeIn";
import Gallery from "@/components/Gallery";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import { statistics } from "@/data/statistics";
import DatabaseFeaturedProjects from "@/components/home/DatabaseFeaturedProjects";

export default function HomePage() {
  return (
    <main>
      <section className="relative flex min-h-[760px] items-end overflow-hidden">
        <Image
          src="/images/home/hero.jpg"
          alt="Give Earth a Smile environmental project"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/20 to-black/80" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-36 text-center text-white md:pb-24">
          <FadeIn direction="down" duration={900}>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-white/85 md:text-base">
              Youth-Led Environmental Action
            </p>
          </FadeIn>

          <FadeIn delay={120} duration={900}>
            <h1 className="mx-auto mt-6 max-w-5xl text-5xl leading-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Together for a Greener Tomorrow
            </h1>
          </FadeIn>

          <FadeIn delay={240} duration={900}>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/90 md:text-xl">
              Connecting young environmental leaders through education,
              community service, and international collaboration.
            </p>
          </FadeIn>

          <FadeIn delay={360} duration={900}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/join"
                className="min-w-52 rounded-full bg-[#B7CA7F] px-9 py-4 text-lg font-bold text-[#233F31] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#C5D78C] hover:shadow-xl"
              >
                Join Us
              </Link>

              <Link
                href="/projects"
                className="min-w-52 rounded-full border-2 border-white bg-black/20 px-9 py-4 text-lg font-bold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#233F31]"
              >
                Explore Projects
              </Link>
            </div>
          </FadeIn>
        </div>

        <div className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/75">
            <span>Scroll</span>
            <span className="h-9 w-px animate-pulse bg-white/75" />
          </div>
        </div>
      </section>

      <section className="grid bg-[#FFFAF0] lg:grid-cols-2">
        <FadeIn direction="right" className="relative min-h-[480px] lg:min-h-[660px]">
          <Image
            src="/images/home/impact.jpg"
            alt="Community environmental initiative"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </FadeIn>

        <div className="flex items-center justify-center px-8 py-20 md:px-14 lg:py-24">
          <FadeIn direction="left" className="max-w-xl text-center lg:text-left">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#6F8172]">
              Our Purpose
            </p>

            <h2 className="mt-5 text-5xl leading-tight md:text-6xl">
              The Impact of an Initiative
            </h2>

            <p className="mt-7 text-lg leading-9">
              There are gaps in our planet&apos;s health that can only be
              filled through community action, education, and care for the
              Earth.
            </p>

            <p className="mt-4 text-lg font-bold">– Give Earth a Smile</p>

            <Link
              href="/about"
              className="mt-9 inline-block bg-[#6F8172] px-10 py-4 text-lg font-semibold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#233F31] hover:shadow-lg"
            >
              Learn More About Us
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#F1F6C8] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Growing Together"
            title="Our Impact in Numbers"
            description="Every project, volunteer, ambassador, and community partnership helps build a healthier and more sustainable future."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {statistics.map((statistic, index) => (
              <FadeIn
                key={statistic.id}
                delay={index * 80}
                className="h-full"
              >
                <article className="group flex h-full min-h-52 flex-col items-center justify-center border border-[#294638] bg-[#FFFAF0] p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <AnimatedCounter
                    value={statistic.value}
                    className="font-[var(--font-heading)] text-5xl text-[#233F31] md:text-6xl"
                  />

                  <div className="my-5 h-px w-14 bg-[#6F8172] transition-all duration-300 group-hover:w-24" />

                  <p className="font-bold">{statistic.label}</p>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={220} className="mt-10 text-center">
            <Link
              href="/impact"
              className="inline-block border border-[#294638] bg-[#233F31] px-10 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-transparent hover:text-[#233F31]"
            >
              Explore Our Global Impact
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#FFFAF0] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Taking Action"
            title="Featured Projects"
            description="Our projects combine environmental education, community service, youth leadership, and international cooperation."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            <DatabaseFeaturedProjects />
          </div>

          <FadeIn delay={250} className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-block border border-[#294638] px-10 py-4 font-bold text-[#233F31] transition duration-300 hover:-translate-y-1 hover:bg-[#233F31] hover:text-white"
            >
              View All Projects
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#233F31] px-6 py-24 text-center text-white md:py-32">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute -bottom-40 -right-32 h-[500px] w-[500px] rounded-full border border-white/10" />

        <FadeIn className="relative z-10 mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B7CA7F]">
            Help Create Change
          </p>

          <h2 className="mt-5 text-5xl leading-tight md:text-6xl">
            Your Support Makes Our Work Possible
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/80">
            Support environmental education, youth leadership, tree planting,
            community service, and humanitarian projects.
          </p>

          <a
            href="https://www.gofundme.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block min-w-56 rounded-full bg-[#B7CA7F] px-9 py-4 text-lg font-bold text-[#233F31] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
          >
            Give Now
          </a>
        </FadeIn>
      </section>

      <Gallery />

      <section className="bg-[#F1F6C8] px-6 py-20 text-center md:py-28">
        <FadeIn className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#6F8172]">
            Become Part of Our Network
          </p>

          <h2 className="mt-5 text-5xl leading-tight md:text-6xl">
            Ready to Give Earth a Smile?
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8">
            Join students from around the world who are taking action in their
            schools and communities.
          </p>

          <Link
            href="/join"
            className="mt-10 inline-block bg-[#233F31] px-12 py-4 text-lg font-bold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#6F8172] hover:shadow-lg"
          >
            Apply to Join
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}