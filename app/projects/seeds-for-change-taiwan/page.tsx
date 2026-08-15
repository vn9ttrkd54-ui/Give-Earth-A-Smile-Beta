import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import TaiwanProjectGallery from "@/components/project/TaiwanProjectGallery";
import { getProjectBySlug } from "@/data/projects";

const impactStatistics = [
  {
    value: "36,000+ NTD",
    secondaryValue: "Approximately $1,200 USD",
    label: "Resources invested in plants, fertilizer, and project materials",
  },
  {
    value: "80+",
    label: "Banana trees planted",
  },
  {
    value: "Hands-On",
    label: "Environmental restoration",
  },
  {
    value: "Sustainable Agriculture",
    label: "Education and regenerative farming awareness",
  },
];

const sustainableDevelopmentGoals = [
  {
    number: "4",
    title: "Quality Education",
    image: "/images/sdg/sdg-4.png",
    description:
      "Providing students with hands-on environmental education that connects classroom concepts with real-world sustainability practices.",
  },
  {
    number: "12",
    title: "Responsible Consumption and Production",
    image: "/images/sdg/sdg-12.png",
    description:
      "Introducing students to responsible agricultural practices and more sustainable approaches to producing food and managing natural resources.",
  },
  {
    number: "13",
    title: "Climate Action",
    image: "/images/sdg/sdg-13.png",
    description:
      "Empowering young people to understand environmental challenges and take meaningful action within their communities.",
  },
  {
    number: "15",
    title: "Life on Land",
    image: "/images/sdg/sdg-15.png",
    description:
      "Supporting environmental restoration, healthier ecosystems, responsible land management, and regenerative agriculture.",
  },
];

export default function SeedsForChangeTaiwanPage() {
  const project = getProjectBySlug(
    "seeds-for-change-taiwan"
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
            Spring 2024 · Gaoshu Township, Pingtung County, Taiwan
          </p>

          <h1 className="mt-5 max-w-5xl text-5xl leading-tight sm:text-6xl md:text-7xl">
            Seeds for Change in Taiwan
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
            Connecting environmental education with hands-on restoration,
            sustainable agriculture, and regenerative farming.
          </p>
        </FadeIn>
      </section>

      {/* Article and sidebar */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_340px]">
          {/* Main article */}
          <FadeIn direction="right">
            <article>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6F8172]">
                Project Article
              </p>

              <div className="mt-8 space-y-6 text-lg leading-9 text-[#233F31]/85">
                <p>
                  As part of Give Earth a Smile&apos;s Seeds for Change
                  initiative, students in Gaoshu Township, Pingtung County,
                  Taiwan came together for a hands-on environmental restoration
                  project at a rural farm. The project provided students with
                  the opportunity to move beyond learning about environmental
                  sustainability and actively contribute to creating a greener
                  future.
                </p>

                <p>
                  Working alongside local students, participants planted 80+
                  banana trees while learning about sustainable agriculture and
                  regenerative farming practices. Through this hands-on
                  experience, students were able to see firsthand how
                  responsible agricultural practices can support environmental
                  health and contribute to the long-term sustainability of
                  local communities.
                </p>

                <p>
                  The project aimed to connect environmental education with
                  meaningful action. By participating directly in the planting
                  process, students gained practical experience while
                  developing a deeper understanding of their relationship with
                  the environment and the role they can play in protecting it.
                </p>

                <p>
                  Seeds for Change in Taiwan reflects Give Earth a Smile&apos;s
                  belief that young people should not only learn about
                  environmental challenges but also be empowered to become part
                  of the solution. By creating opportunities for students to
                  engage directly with their communities and the natural
                  environment, we hope to inspire a generation of
                  environmentally conscious leaders who are ready to take
                  action for a more sustainable future.
                </p>
              </div>

              {/* Objective */}
              <div className="mt-12 border-l-4 border-[#6F8172] bg-[#F1F6C8] p-7">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6F8172]">
                  Project Objective
                </p>

                <p className="mt-4 text-lg leading-8">
                  Provide students in Gaoshu Township, Pingtung County, Taiwan
                  with hands-on opportunities to learn about sustainable
                  agriculture and regenerative farming while actively
                  participating in environmental restoration and developing a
                  greater sense of responsibility toward the environment.
                </p>
              </div>

              {/* Challenges */}
              <div className="mt-12">
                <h3 className="text-3xl">Challenges and Opportunities</h3>

                <ul className="mt-6 space-y-4">
                  {[
                    "Limited opportunities for students to engage directly with environmental restoration and sustainable agriculture.",
                    "A need to increase awareness of regenerative farming practices and their role in creating healthier ecosystems.",
                    "Opportunities for students to learn about environmental stewardship through hands-on experiences.",
                    "Rural communities can provide meaningful settings for students to connect with agriculture, nature, and environmental responsibility.",
                    "Hands-on environmental projects can help students understand how their actions can contribute to long-term ecological sustainability.",
                    "Students can become active participants in environmental restoration rather than simply learning about environmental challenges in a classroom.",
                    "Schools and local communities can work together to encourage environmental awareness and sustainable practices among younger generations.",
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

              {/* Proposed Solution */}
              <div className="mt-12">
                <h3 className="text-3xl">Proposed Solution</h3>

                <ul className="mt-6 space-y-4">
                  {[
                    "Organize a hands-on environmental restoration project at a rural farm in Gaoshu Township, Pingtung County.",
                    "Bring students together to participate directly in environmental restoration and agricultural activities.",
                    "Plant more than 80 banana trees alongside local students.",
                    "Teach students about sustainable agriculture and regenerative farming practices.",
                    "Provide students with hands-on opportunities to understand the relationship between agriculture, environmental stewardship, and ecosystem health.",
                    "Encourage students to take ownership of environmental action within their communities.",
                    "Create opportunities for students to contribute directly to a greener and more sustainable future.",
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
                      title: "Environmental Restoration",
                      text: "Students directly contributed to restoring a rural farm by planting more than 80 banana trees.",
                    },
                    {
                      title: "Sustainable Agriculture",
                      text: "Students learned how environmentally responsible farming practices can support communities and protect natural resources.",
                    },
                    {
                      title: "Regenerative Farming",
                      text: "Students were introduced to agricultural approaches designed to support long-term ecosystem health and sustainability.",
                    },
                    {
                      title: "Student Environmental Action",
                      text: "Participants moved beyond learning about environmental challenges and became active contributors to environmental solutions.",
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

              {/* Implementation */}
              <div className="mt-12">
                <h3 className="text-3xl">Implementation Phases</h3>

                <div className="mt-6 space-y-5">
                  {[
                    {
                      number: "01",
                      title: "Planning and Coordination",
                      text: "The rural farm and project location were identified, local students and community partners were coordinated, environmental restoration activities were determined, and planting plans and educational materials were prepared.",
                    },
                    {
                      number: "02",
                      title: "Preparation and Environmental Education",
                      text: "The farm and planting area were prepared, banana trees and planting materials were organized, and students were introduced to sustainable agriculture, regenerative farming, environmental restoration, and responsible land management.",
                    },
                    {
                      number: "03",
                      title: "Hands-On Environmental Restoration",
                      text: "Students gathered at the rural farm and participated directly in environmental restoration by planting more than 80 banana trees while connecting hands-on planting with lessons about sustainable agriculture and regenerative farming.",
                    },
                    {
                      number: "04",
                      title: "Continued Environmental Awareness and Action",
                      text: "Students were encouraged to apply their understanding of sustainability within their communities, continue engaging with environmental issues, and reinforce lessons about regenerative farming and responsible environmental stewardship.",
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

              {/* Activity Plan */}
              <div className="mt-12">
                <h3 className="text-3xl">Project Activity Plan</h3>

                <div className="mt-6 space-y-5">
                  {[
                    {
                      title: "Hands-On Environmental Restoration",
                      text: "Students directly participated in restoring the rural farm by planting more than 80 banana trees and gaining practical environmental experience.",
                    },
                    {
                      title: "Sustainable Agriculture Education",
                      text: "Students learned about the relationship between farming practices and environmental health while connecting educational concepts with real-world agriculture.",
                    },
                    {
                      title: "Regenerative Farming Practices",
                      text: "Students learned how regenerative approaches to agriculture can support natural ecosystems and long-term environmental sustainability.",
                    },
                    {
                      title: "Empowering Students Through Environmental Action",
                      text: "Students were encouraged to see themselves as environmental stewards and recognize that individual and collective action can create lasting change.",
                    },
                  ].map((activity, index) => (
                    <div
                      key={activity.title}
                      className="border border-[#294638] bg-[#F1F6C8] p-6"
                    >
                      <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#6F8172]">
                        Activity {index + 1}
                      </p>

                      <h4 className="mt-2 text-2xl">
                        {activity.title}
                      </h4>

                      <p className="mt-4 leading-8 text-[#233F31]/75">
                        {activity.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </FadeIn>

          {/* Right sidebar */}
          <FadeIn direction="left" delay={100}>
            <aside className="space-y-7 lg:sticky lg:top-28">
              {/* Project File */}
              <div className="border border-[#294638] bg-[#F1F6C8] p-7">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6F8172]">
                  Project File
                </p>

                <h2 className="mt-4 text-3xl">
                  Full Project Profile
                </h2>

                <p className="mt-4 leading-7 text-[#233F31]/70">
                  Read the complete project profile, implementation plan,
                  objectives, responsibilities, and project activities.
                </p>

                <a
                  href="/files/seeds-for-change-taiwan-project-file.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 block bg-[#233F31] px-6 py-4 text-center font-bold text-white transition hover:bg-[#6F8172]"
                >
                  Open Project File
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
                      Project Type
                    </dt>

                    <dd className="mt-1 font-semibold">
                      Environmental Restoration
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.15em] text-[#233F31]/55">
                      Location
                    </dt>

                    <dd className="mt-1 font-semibold">
                      Gaoshu Township, Pingtung County, Taiwan
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.15em] text-[#233F31]/55">
                      Focus
                    </dt>

                    <dd className="mt-1 font-semibold">
                      Sustainable Agriculture &amp; Regenerative Farming
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.15em] text-[#233F31]/55">
                      Status
                    </dt>

                    <dd className="mt-1 font-semibold">
                      Completed
                    </dd>
                  </div>
                </dl>
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

          <div className="mt-12 grid gap-6 md:grid-cols-2">
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

                    <h3 className="mt-2 text-2xl">
                      {goal.title}
                    </h3>

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
            <TaiwanProjectGallery
              images={project.gallery}
            />
          </FadeIn>
        </div>
      </section>
    </main>
  );
}