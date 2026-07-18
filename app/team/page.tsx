import Image from "next/image";
import { executiveTeam } from "@/data/team";
import { ambassadors } from "@/data/ambassadors";

export default function TeamPage() {
  return (
    <main className="bg-[#FFFAF0]">
      <section className="bg-[#F1F6C8] px-6 py-20 text-center">
        <p className="font-semibold uppercase tracking-[0.25em]">
          Our People
        </p>

        <h1 className="mt-5 text-6xl">Meet Our Team</h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8">
          Our organization is led by an executive team and supported by
          ambassadors representing communities across the world.
        </p>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-5xl">Executive Team</h2>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {executiveTeam.map((member) => (
              <article
                key={member.id}
                className="border border-[#294638] bg-[#FFFAF0]"
              >
                <div className="relative h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-3xl">{member.name}</h3>

                  <p className="mt-3 font-semibold">{member.role}</p>

                  <p className="mt-5 text-sm leading-7">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F1F6C8] px-6 py-20 text-center">
        <h2 className="text-5xl">Our Ambassador Network</h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8">
          We currently have {ambassadors.length} ambassadors representing
          locations throughout the United States and internationally.
        </p>

        <a
          href="/impact"
          className="mt-8 inline-block bg-[#233F31] px-10 py-4 font-semibold text-white"
        >
          View All Ambassadors
        </a>
      </section>
    </main>
  );
}