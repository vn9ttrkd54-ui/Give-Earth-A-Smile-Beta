import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import MalawiProjectGallery from "@/components/project/MalawiProjectGallery";
import { getProjectBySlug } from "@/data/projects";

const impactStatistics = [
  {
    value: "461,000 MWK",
    secondaryValue: "Approximately $266 USD",
    label: "Raised to support the initiative",
  },
  {
    value: "3",
    label: "Days of environmental education",
  },
  {
    value: "30+",
    label: "Students impacted",
  },
  {
    value: "Student Action Plans",
    label: "Designed to inspire lasting environmental action",
  },
];

const sustainableDevelopmentGoals = [
  {
    number: "4",
    title: "Quality Education",
    image: "/images/sdg/sdg-4.png",
    description:
      "Providing students with interactive environmental education, learning activities, and opportunities to develop knowledge they can apply within their communities.",
  },
  {
    number: "6",
    title: "Clean Water and Sanitation",
    image: "/images/sdg/sdg-6.png",
    description:
      "Teaching students about water conservation and encouraging practical actions that help protect and responsibly use water resources.",
  },
  {
    number: "13",
    title: "Climate Action",
    image: "/images/sdg/sdg-13.png",
    description:
      "Building environmental awareness and empowering young people to develop their own solutions and action plans for environmental challenges.",
  },
];

const projectVideos = [
  {
    id: 1,
    src: "https://res.cloudinary.com/otmypjmz/video/upload/v1785097416/01_tmgnui.mp4",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/otmypjmz/video/upload/v1785097427/02_knxfa9.mp4",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/otmypjmz/video/upload/v1785097447/03_r6lbtd.mp4",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/otmypjmz/video/upload/v1785097458/04_yrf1id.mp4",
  },
];

export default function SeedsForChangeMalawiPage() {
  const project = getProjectBySlug(
    "seeds-for-change-malawi"
  );

  if (!project) {
    return null;
  }
  return (
    <main className="bg-[#FFFAF0]">
      {/* Project heading */}
      <section className="bg-[#233F31] px-6 py-16 text-white md:py-20">
        <FadeIn className="mx-auto max-w-7xl">
          <Link
            href="/projects"
            className="mb-10 inline-flex items-center gap-3 border border-white/50 px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#233F31]"
          >
            <span aria-hidden="true">←</span>
            Back to Projects
          </Link>

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B7CA7F]">
            Spring 2026 · Karonga District, Malawi
          </p>

          <h1 className="mt-5 max-w-5xl text-5xl leading-tight sm:text-6xl md:text-7xl">
            Seeds for Change in Malawi
          </h1>
          <ProjectHighlights photos={project.featuredPhotos ?? []} />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
            Empowering students through environmental education, water
            conservation, and student-led action.
          </p>
        </FadeIn>
      </section>

      {/* Article and sidebar */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_340px]">
          {/* Main Article */}
          <FadeIn direction="right">
            <article>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6F8172]">
                Project Article
              </p>

              <div className="mt-8 space-y-6 text-lg leading-9 text-[#233F31]/85">
                <p>
                  In Spring 2026, Give Earth a Smile launched Seeds for Change,
                  a three-day environmental education initiative at Bwiba Full
                  Primary School in the rural Karonga District of Malawi. With
                  approximately 461,000 Malawian Kwacha ($266 USD) raised, the project brought
                  together students and educators to explore the importance of
                  water conservation and environmental responsibility.
                </p>

                <p>
                  Over the course of three days, 30 students participated in
                  interactive lessons and activities designed to connect
                  environmental concepts to their everyday lives. The program
                  featured a storytime session centered around{" "}
                  <em>Why Should I Save Water?</em> by Jen Green, helping
                  students explore the importance of protecting and conserving
                  one of our most essential resources.
                </p>

                <p>
                  The Give Earth a Smile team also developed interactive
                  worksheets specifically for the program, encouraging students
                  to think critically about water conservation and identify ways
                  they could make a difference in their own homes and
                  communities. Rather than simply learning about environmental
                  challenges, students were encouraged to become part of the
                  solution.
                </p>

                <p>
                  The program culminated in students designing their own
                  student-led water conservation action plans, transforming what
                  they learned into ideas for meaningful environmental action.
                  These projects were designed to inspire students to take
                  ownership of environmental issues and recognize that even
                  small actions can contribute to lasting change.
                </p>

                <p>
                  Seeds for Change represents Give Earth a Smile&apos;s belief
                  that environmental education is most powerful when young
                  people are given the knowledge, creativity, and confidence to
                  take action. By introducing environmental awareness at a young
                  age and empowering students to develop solutions of their own,
                  the initiative aims to nurture a generation of young
                  environmental leaders who can create positive change within
                  their families, schools, and communities.
                </p>
              </div>

              {/* Objective */}
              <div className="mt-12 border-l-4 border-[#6F8172] bg-[#F1F6C8] p-7">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6F8172]">
                  Project Objective
                </p>

                <p className="mt-4 text-lg leading-8">
                  Introduce students to water conservation and environmental
                  responsibility through interactive education while empowering
                  them to transform what they learn into practical,
                  student-led environmental action.
                </p>
              </div>

              {/* Challenges */}
              <div className="mt-12">
                <h3 className="text-3xl">Challenges and Opportunities</h3>

                <ul className="mt-6 space-y-4">
                  {[
                    "Limited access to structured environmental education opportunities in rural communities.",
                    "Water conservation is an important environmental issue that directly connects to students' everyday lives.",
                    "Young students may understand environmental problems but have fewer opportunities to develop solutions of their own.",
                    "Interactive lessons can make environmental concepts more understandable and memorable.",
                    "Schools provide an opportunity to introduce environmental responsibility at an early age.",
                    "Student-led projects can extend environmental learning beyond the classroom and into families and communities.",
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
              </div>

              {/* Solution */}
              <div className="mt-12">
                <h3 className="text-3xl">Proposed Solution</h3>

                <ul className="mt-6 space-y-4">
                  {[
                    "Organize a three-day environmental education program at Bwiba Full Primary School.",
                    "Introduce students to the importance of water conservation and environmental responsibility.",
                    "Use interactive lessons and activities to connect environmental concepts with students' everyday lives.",
                    "Incorporate a storytime session focused on water conservation.",
                    "Develop original Give Earth a Smile worksheets for participating students.",
                    "Encourage students to identify ways they can conserve water at home and within their communities.",
                    "Guide students in developing their own water conservation action plans.",
                    "Empower students to view themselves as active participants in solving environmental challenges.",
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
              </div>

              {/* Benefits */}
              <div className="mt-12">
                <h3 className="text-3xl">Project Benefits</h3>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  {[
                    {
                      title: "Environmental Education",
                      text: "Students gain a stronger understanding of water conservation, environmental responsibility, and the importance of protecting natural resources.",
                    },
                    {
                      title: "Interactive Learning",
                      text: "Storytime, worksheets, discussions, and activities help students connect environmental concepts with their everyday experiences.",
                    },
                    {
                      title: "Student Leadership",
                      text: "Students develop their own water conservation action plans and are encouraged to become active participants in environmental solutions.",
                    },
                    {
                      title: "Community Impact",
                      text: "Ideas introduced at school can extend into students' homes, families, and communities through practical conservation actions.",
                    },
                  ].map((benefit) => (
                    <div
                      key={benefit.title}
                      className="border border-[#294638] bg-[#F1F6C8] p-6"
                    >
                      <h4 className="text-2xl">{benefit.title}</h4>

                      <p className="mt-4 leading-7 text-[#233F31]/75">
                        {benefit.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phases */}
              <div className="mt-12">
                <h3 className="text-3xl">Implementation Phases</h3>

                <div className="mt-6 space-y-5">
                  {[
                    {
                      number: "01",
                      title: "Planning and Preparation",
                      text: "Give Earth a Smile developed the environmental education program, coordinated with Bwiba Full Primary School, raised project funding, and prepared the educational materials and activities.",
                    },
                    {
                      number: "02",
                      title: "Environmental Education",
                      text: "Students participated in interactive lessons exploring water conservation and environmental responsibility and connected these ideas to their everyday lives.",
                    },
                    {
                      number: "03",
                      title: "Interactive Learning Activities",
                      text: "Students participated in storytime, discussions, and Give Earth a Smile worksheets designed to encourage critical thinking about water conservation.",
                    },
                    {
                      number: "04",
                      title: "Student Action Plans",
                      text: "Students transformed their learning into student-led water conservation action plans, identifying ways they could create meaningful environmental change in their homes and communities.",
                    },
                  ].map((phase) => (
                    <div
                      key={phase.number}
                      className="grid gap-5 border border-[#294638] bg-[#F1F6C8] p-6 sm:grid-cols-[70px_1fr]"
                    >
                      <span className="font-[var(--font-heading)] text-4xl text-[#6F8172]">
                        {phase.number}
                      </span>

                      <div>
                        <h4 className="text-2xl">{phase.title}</h4>

                        <p className="mt-3 leading-8 text-[#233F31]/75">
                          {phase.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </FadeIn>

          {/* Sidebar */}
          <FadeIn direction="left" delay={100}>
            <aside className="space-y-7 lg:sticky lg:top-28">
              {/* Project File */}
              <div className="border border-[#294638] bg-[#F1F6C8] p-7">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6F8172]">
                  Project File
                </p>

                <h2 className="mt-4 text-3xl">Full Project Profile</h2>

                <p className="mt-4 leading-7 text-[#233F31]/70">
                  Read the complete project profile, program plan, objectives,
                  activities, and expected outcomes.
                </p>

                <a
                  href="/files/seeds-for-change-malawi.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 block bg-[#233F31] px-6 py-4 text-center font-bold text-white transition hover:bg-[#6F8172]"
                >
                  Open Project File
                </a>
              </div>

              {/* Worksheet */}
              <div className="border border-[#294638] bg-[#F1F6C8] p-7">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6F8172]">
                  Educational Resource
                </p>

                <h2 className="mt-4 text-3xl">Project Worksheet</h2>

                <p className="mt-4 leading-7 text-[#233F31]/70">
                  View the educational worksheet developed by Give Earth a
                  Smile for students participating in Seeds for Change.
                </p>

                <a
                  href="/files/seeds-for-change-malawi-worksheet.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 block bg-[#233F31] px-6 py-4 text-center font-bold text-white transition hover:bg-[#6F8172]"
                >
                  Open Worksheet
                </a>
              </div>

              {/* Impact */}
              <div className="border border-[#294638] bg-[#233F31] p-7 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B7CA7F]">
                  Project Impact
                </p>

                <div className="mt-6 divide-y divide-white/20">
                  {impactStatistics.map((statistic) => (
                    <div
                      key={statistic.label}
                      className="py-6 first:pt-0 last:pb-0"
                    >
                      <p className="font-[var(--font-heading)] text-4xl text-[#D9E89C]">
                        {statistic.value}
                      </p>

                      {statistic.secondaryValue && (
                        <p className="mt-1 text-sm font-semibold text-white/65">
                          {statistic.secondaryValue}
                        </p>
                      )}

                      <p className="mt-3 leading-6 text-white/80">
                        {statistic.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="border border-[#294638] bg-[#FFFAF0] p-7">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6F8172]">
                  Project Details
                </p>

                <dl className="mt-6 space-y-5">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.15em] text-[#233F31]/55">
                      School
                    </dt>

                    <dd className="mt-1 font-semibold">
                      Bwiba Full Primary School
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.15em] text-[#233F31]/55">
                      Location
                    </dt>

                    <dd className="mt-1 font-semibold">
                      Karonga District, Malawi
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.15em] text-[#233F31]/55">
                      Duration
                    </dt>

                    <dd className="mt-1 font-semibold">3 Days</dd>
                  </div>

                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.15em] text-[#233F31]/55">
                      Status
                    </dt>

                    <dd className="mt-1 font-semibold">Completed</dd>
                  </div>
                </dl>
              </div>

              {/* Project Partner */}
              <div className="overflow-hidden border border-[#294638] bg-[#FFFAF0]">
                <div className="relative aspect-[4/3] bg-[#DDE7BE]">
                  <Image
                    src="/images/ambassadors/robert-mhango.jpg"
                    alt="Robert Lwitiko Mhango"
                    fill
                    sizes="(max-width: 1024px) 100vw, 32vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-7">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6F8172]">
                    Project Partner
                  </p>

                  <h2 className="mt-4 text-3xl">
                    Robert Lwitiko Mhango
                  </h2>

                  <p className="mt-2 font-semibold text-[#6F8172]">
                    Founder and Executive Director, Mtuli Foundation
                  </p>

                  <p className="mt-5 leading-7 text-[#233F31]/70">
                    Robert Lwitiko Mhango is from Karonga District in northern
                    Malawi. He has extensive experience working with American
                    professionals and implementing U.S. government-funded
                    projects through the U.S. Department of State. His latest
                    initiative is a CDAF project scheduled for implementation
                    from September through December 2026.
                  </p>
                </div>
              </div>
            </aside>
          </FadeIn>
        </div>
      </section>

      {/* UN SDGs */}
      <section className="bg-[#F1F6C8] px-6 py-16 text-[#233F31] md:py-20">
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
              <FadeIn
                key={goal.number}
                delay={index * 90}
                className="h-full"
              >
                <article className="flex h-full overflow-hidden border border-[#294638] bg-[#FFFAF0] text-[#233F31]">
                  <div className="relative min-h-48 w-40 shrink-0 bg-[#FFFAF0]">
                    <Image
                      src={goal.image}
                      alt={`UN Sustainable Development Goal ${goal.number}: ${goal.title}`}
                      fill
                      sizes="160px"
                      className="object-contain p-3"
                    />
                  </div>

                  <div className="bg-[#FFFAF0] p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B7CA7F]">
                      Goal {goal.number}
                    </p>

                    <h3 className="mt-2 text-2xl">{goal.title}</h3>

                    <p className="mt-4 text-sm leading-7 text-[#233F31]/75">
                      {goal.description}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#FFFAF0] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#6F8172]">
              Project Photos
            </p>

            <h2 className="mt-5 text-4xl md:text-5xl">
              Seeds for Change Gallery
            </h2>
          </FadeIn>

          <FadeIn delay={120} className="mt-10">
            <MalawiProjectGallery images={project.gallery} />
          </FadeIn>
        </div>
      </section>

      {/* Videos */}
      <section className="bg-[#233F31] px-6 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B7CA7F]">
              Project Videos
            </p>

            <h2 className="mt-5 text-4xl md:text-5xl">
              Seeds for Change in Action
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projectVideos.map((video, index) => (
              <FadeIn key={video.id} delay={(index % 2) * 80}>
                <div className="border border-white/20 bg-white/5 p-3">
                  <video
                    controls
                    preload="metadata"
                    className="aspect-video w-full bg-black object-contain"
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  <p className="px-2 pb-2 pt-4 text-sm font-bold uppercase tracking-[0.15em] text-white/70">
                    Project Video {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
import ProjectHighlights from "@/components/project/ProjectHighlights";
