import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function ContactPage() {
  return (
    <main>
      <section className="bg-[#233F31] px-6 py-20 text-white md:py-28">
        <FadeIn className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B7CA7F]">
            Get in Touch
          </p>

          <h1 className="mt-5 text-5xl leading-tight sm:text-6xl md:text-7xl">
            Let&apos;s Connect
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/80">
            Contact Give Earth a Smile to learn more about our projects,
            ambassador network, educational resources, and opportunities to
            support our work.
          </p>
        </FadeIn>
      </section>

      <section className="bg-[#F1F6C8] px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <FadeIn direction="right" className="h-full">
            <article className="flex h-full min-h-72 flex-col justify-between border border-[#294638] bg-[#FFFAF0] p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl md:p-10">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6F8172]">
                  Email
                </p>

                <h2 className="mt-5 text-4xl">Send Us a Message</h2>

                <p className="mt-5 leading-8 text-[#233F31]/75">
                  Reach out with questions about membership, partnerships,
                  projects, volunteering, or educational outreach.
                </p>
              </div>

              <a
                href="mailto:giveearthasmile@gmail.com"
                className="mt-9 break-all text-lg font-bold underline decoration-2 underline-offset-8 transition hover:text-[#6F8172]"
              >
                giveearthasmile@gmail.com
              </a>
            </article>
          </FadeIn>

          <FadeIn direction="left" delay={100} className="h-full">
            <article className="flex h-full min-h-72 flex-col justify-between border border-[#294638] bg-[#FFFAF0] p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl md:p-10">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6F8172]">
                  Instagram
                </p>

                <h2 className="mt-5 text-4xl">Follow Our Work</h2>

                <p className="mt-5 leading-8 text-[#233F31]/75">
                  Follow our projects, announcements, environmental outreach,
                  and updates from our international network.
                </p>
              </div>

              <a
                href="https://www.instagram.com/giveearthasmile?igsh=cTMwOHd5OW9tZjJo"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 text-lg font-bold underline decoration-2 underline-offset-8 transition hover:text-[#6F8172]"
              >
                @giveearthasmile
              </a>
            </article>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#FFFAF0] px-6 py-20 text-center md:py-28">
        <FadeIn className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#6F8172]">
            Join Our Network
          </p>

          <h2 className="mt-5 text-5xl leading-tight md:text-6xl">
            Help Us Create Meaningful Change
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8">
            Become part of a growing community of students and volunteers
            leading environmental education, service, and outreach.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/join"
              className="bg-[#233F31] px-10 py-4 font-bold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#6F8172] hover:shadow-lg"
            >
              Join Our Organization
            </Link>

            <Link
              href="/projects"
              className="border border-[#294638] px-10 py-4 font-bold text-[#233F31] transition duration-300 hover:-translate-y-1 hover:bg-[#233F31] hover:text-white"
            >
              Explore Our Projects
            </Link>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}