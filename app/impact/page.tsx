import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ImpactMap from "@/components/impact/ImpactMap";
import SectionHeader from "@/components/SectionHeader";
import {
  impactCountries,
  impactLocations,
} from "@/data/impactLocations";

export default function ImpactPage() {
  const ambassadors = impactLocations.filter(
    (location) => location.type === "ambassador",
  );

  const projects = impactLocations.filter(
    (location) => location.type === "project",
  );

  const unitedStatesAmbassadors = ambassadors.filter(
    (location) => location.region === "United States",
  );

  const internationalAmbassadors = ambassadors.filter(
    (location) => location.region === "International",
  );

  return (
    <main>
      <section className="bg-[#233F31] px-6 py-20 text-white md:py-28">
        <FadeIn className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B7CA7F]">
            Our Global Network
          </p>

          <h1 className="mt-5 text-5xl leading-tight sm:text-6xl md:text-7xl">
            Environmental Action Across Borders
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/85">
            Explore the ambassadors, projects, and communities connected
            through Give Earth a Smile&apos;s growing international network.
          </p>
        </FadeIn>
      </section>

      <section className="bg-[#F1F6C8] px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-[1500px]">
          <SectionHeader
            eyebrow="Interactive Map"
            title="Explore Our Impact"
            description="Search by ambassador, project, city, or country. Select a location from the list or click a marker to learn more."
          />

          <FadeIn delay={120} className="mt-12">
            <ImpactMap />
          </FadeIn>

          <FadeIn delay={220}>
            <div className="mt-7 grid gap-4 bg-[#FFFAF0] p-6 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
              <article className="border-l-4 border-[#233F31] pl-5">
                <p className="font-[var(--font-heading)] text-4xl">
                  {impactCountries.length}
                </p>
                <p className="mt-1 text-sm font-bold">Countries Represented</p>
              </article>

              <article className="border-l-4 border-[#233F31] pl-5">
                <p className="font-[var(--font-heading)] text-4xl">
                  {ambassadors.length}
                </p>
                <p className="mt-1 text-sm font-bold">Ambassadors</p>
              </article>

              <article className="border-l-4 border-[#233F31] pl-5">
                <p className="font-[var(--font-heading)] text-4xl">
                  {projects.length}
                </p>
                <p className="mt-1 text-sm font-bold">Mapped Projects</p>
              </article>

              <article className="border-l-4 border-[#233F31] pl-5">
                <p className="font-[var(--font-heading)] text-4xl">
                  {impactLocations.length}
                </p>
                <p className="mt-1 text-sm font-bold">Impact Locations</p>
              </article>
            </div>
          </FadeIn>

          <p className="mt-5 text-center text-xs leading-6 text-[#233F31]/65">
            Map markers currently represent approximate cities or regional
            locations. More precise project and ambassador locations can be
            added as the organization grows.
          </p>
        </div>
      </section>

      <section className="bg-[#FFFAF0] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="National Network"
            title="United States Ambassadors"
            description="Students helping expand environmental education, leadership, and service throughout the United States."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {unitedStatesAmbassadors.map((ambassador, index) => (
              <FadeIn
                key={ambassador.id}
                delay={(index % 4) * 70}
                className="h-full"
              >
                <article className="group flex h-full min-h-56 flex-col border border-[#294638] bg-[#F1F6C8] p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#233F31] font-bold text-white">
                    {ambassador.name
                      .split(" ")
                      .slice(0, 2)
                      .map((namePart) => namePart[0])
                      .join("")}
                  </div>

                  <h3 className="mt-6 text-2xl">{ambassador.name}</h3>

                  <p className="mt-2 text-sm font-bold text-[#6F8172]">
                    {ambassador.city}, {ambassador.country}
                  </p>

                  <p className="mt-4 text-sm leading-6">
                    {ambassador.description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F1F6C8] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="International Network"
            title="International Ambassadors"
            description="Young environmental leaders connecting communities and ideas across borders."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {internationalAmbassadors.map((ambassador, index) => (
              <FadeIn
                key={ambassador.id}
                delay={(index % 4) * 70}
                className="h-full"
              >
                <article className="group flex h-full min-h-56 flex-col border border-[#294638] bg-[#FFFAF0] p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#B7CA7F] font-bold text-[#233F31]">
                    {ambassador.name
                      .split(" ")
                      .slice(0, 2)
                      .map((namePart) => namePart[0])
                      .join("")}
                  </div>

                  <h3 className="mt-6 text-2xl">{ambassador.name}</h3>

                  <p className="mt-2 text-sm font-bold text-[#6F8172]">
                    {ambassador.city}, {ambassador.country}
                  </p>

                  <p className="mt-4 text-sm leading-6">
                    {ambassador.description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#233F31] px-6 py-20 text-center text-white md:py-28">
        <FadeIn className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B7CA7F]">
            Expand Our Reach
          </p>

          <h2 className="mt-5 text-5xl leading-tight md:text-6xl">
            Bring Give Earth a Smile to Your Community
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/80">
            Join our ambassador network and lead environmental education,
            outreach, and service projects where you live.
          </p>

          <Link
            href="/join"
            className="mt-10 inline-block bg-[#B7CA7F] px-12 py-4 text-lg font-bold text-[#233F31] shadow-md transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
          >
            Apply to Join
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}