import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import OdishaProjectGallery from "@/components/project/OdishaProjectGallery";
import Link from "next/link";

const impactStatistics = [
  {
    value: "₹333,000+",
    secondaryValue: "Approximately $3,470 USD",
    label: "Raised and invested by Give Earth a Smile",
  },
  {
    value: "300+",
    label: "Students impacted",
  },
  {
    value: "10",
    label: "Classes benefiting",
  },
  {
    value: "26",
    label: "Pairs of desks and benches provided",
  },
];

const sustainableDevelopmentGoals = [
  {
    number: "4",
    title: "Quality Education",
    image: "/images/sdg/sdg-4.png",
    description:
      "Expanding access to modern educational technology, improved classroom infrastructure, and more engaging learning opportunities.",
  },
  {
    number: "10",
    title: "Reduced Inequalities",
    image: "/images/sdg/sdg-10.png",
    description:
      "Helping reduce educational and digital inequalities affecting students in rural and underserved communities.",
  },
  {
    number: "17",
    title: "Partnerships for the Goals",
    image: "/images/sdg/sdg-17.png",
    description:
      "Uniting Give Earth a Smile, Pudhiya Shakti, school leaders, teachers, and local partners around a shared educational goal.",
  },
];

export default function SmartClassroomsOdishaPage() {
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
            Fall 2025 · Jagatsinghpur, Odisha, India
          </p>

          <h1 className="mt-5 max-w-5xl text-5xl leading-tight sm:text-6xl md:text-7xl">
            Smart Classrooms in Odisha
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
            Expanding access to technology-enabled education for students in a
            rural and underserved community.
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
                  In Fall 2025, Give Earth a Smile partnered with Pudhiya Shakti 
                  to establish a smart classroom at Saraswati Sishu Vidya Mandira 
                  in Jagatsinghpur, Odisha. Located in a rural and underserved 
                  community, the school serves students with limited access to 
                  modern educational technology and digital learning resources. 
                  Through this initiative, we aim to help bridge the educational 
                  and digital divide by creating a more engaging learning environment 
                  and expanding opportunities for students to access knowledge beyond 
                  their local community.

                </p>

                <p>
                  Give Earth a Smile independently raised and invested ₹333,000+ 
                  toward the project, supporting the construction and development 
                  of the classroom and providing essential educational infrastructure. 
                  The completed classroom includes a 75-inch digital smart board, 
                  convertible whiteboard and smart board system with cubby storage 
                  spaces, 26 pairs of student desks and benches, and a teacher's desk.

                </p>

                <p>
                  The project has impacted 300+ students across 10 classes, giving students 
                  greater access to technology that can support interactive, engaging, 
                  and visually enriched learning. Beyond the classroom itself, the smart 
                  board creates the foundation for future digital learning opportunities, 
                  allowing students to connect with teachers, educators, speakers, and experts 
                  from other parts of India and around the world. Give Earth a Smile is working 
                  toward bringing these educational voices into the classroom, helping students 
                  explore new ideas, gain diverse perspectives, and discover possibilities 
                  beyond their immediate surroundings.
                </p>
              </div>

              <div className="mt-12 border-l-4 border-[#6F8172] bg-[#F1F6C8] p-7">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6F8172]">
                  Project Objective
                </p>

                <p className="mt-4 text-lg leading-8">
                  Expand access to modern educational technology and digital
                  learning resources, improve the classroom learning
                  environment, and create opportunities for students to
                  connect with educators and knowledge beyond their local
                  community.
                </p>
              </div>

              <div className="mt-12">
                <h3 className="text-3xl">Challenges and Opportunities</h3>

                <ul className="mt-6 space-y-4">
                  {[
                    "Limited access to modern educational technology and digital learning resources.",
                    "Fewer educational opportunities in rural and underserved communities.",
                    "Limited access to experienced teachers and specialized educators.",
                    "Few opportunities to connect with speakers and experts beyond the local community.",
                    "Technology can create more interactive and engaging learning experiences.",
                    "Schools can serve as centers of knowledge, technology, and opportunity.",
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

              <div className="mt-12">
                <h3 className="text-3xl">Proposed Solution</h3>

                <ul className="mt-6 space-y-4">
                  {[
                    "Install a 75-inch digital smart board.",
                    "Provide a convertible whiteboard and smart board system.",
                    "Add cubby storage spaces for classroom materials.",
                    "Provide 26 pairs of student desks and benches.",
                    "Provide a teacher's desk and additional classroom materials.",
                    "Fund the construction and development of the classroom.",
                    "Create the foundation for future digital classes with educators from India and around the world.",
                    "Bring speakers and educational professionals into the classroom through virtual sessions.",
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

              <div className="mt-12">
                <h3 className="text-3xl">Project Benefits</h3>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  {[
                    {
                      title: "Interactive Learning",
                      text: "Digital presentations, visual explanations, educational videos, and interactive classroom content.",
                    },
                    {
                      title: "Improved Infrastructure",
                      text: "Modern classroom furniture, storage, teaching space, and educational technology.",
                    },
                    {
                      title: "Support for Teachers",
                      text: "New instructional tools that can improve lesson delivery and make complex ideas easier to explain.",
                    },
                    {
                      title: "Global Connections",
                      text: "Future opportunities to connect students with educators, speakers, and professionals.",
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

              <div className="mt-12">
                <h3 className="text-3xl">Implementation Phases</h3>

                <div className="mt-6 space-y-5">
                  {[
                    {
                      number: "01",
                      title: "Planning and Coordination",
                      text: "The target school was identified, classroom needs were assessed, partnerships were established, and project requirements and fundraising goals were developed.",
                    },
                    {
                      number: "02",
                      title: "Fundraising and Project Preparation",
                      text: "Give Earth a Smile raised more than ₹333,000, finalized the classroom design, procured technology and materials, and coordinated construction.",
                    },
                    {
                      number: "03",
                      title: "Construction and Installation",
                      text: "The classroom was constructed and equipped with the smart board, teaching system, storage, desks, benches, teacher workspace, and educational materials.",
                    },
                    {
                      number: "04",
                      title: "Classroom Use and Future Opportunities",
                      text: "Teachers and students began using the classroom while future virtual classes, guest speakers, and long-term impact evaluation continued.",
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

          {/* Right sidebar */}
          <FadeIn direction="left" delay={100}>
            <aside className="space-y-7 lg:sticky lg:top-28">
              <div className="border border-[#294638] bg-[#F1F6C8] p-7">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6F8172]">
                  Project File
                </p>

                <h2 className="mt-4 text-3xl">
                  Full Project Profile
                </h2>

                <p className="mt-4 leading-7 text-[#233F31]/70">
                  Read the complete project profile, implementation plan,
                  objectives, responsibilities, and expected outcomes.
                </p>

                <a
                  href="/files/smart-classrooms-odisha.pdf"
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

              <div className="border border-[#294638] bg-[#FFFAF0] p-7">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6F8172]">
                  Project Details
                </p>

                <dl className="mt-6 space-y-5">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.15em] text-[#233F31]/55">
                      Partner
                    </dt>
                    <dd className="mt-1 font-semibold">Pudhiya Shakti</dd>
                  </div>

                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.15em] text-[#233F31]/55">
                      School
                    </dt>
                    <dd className="mt-1 font-semibold">
                      Saraswati Sishu Vidya Mandira
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.15em] text-[#233F31]/55">
                      Location
                    </dt>
                    <dd className="mt-1 font-semibold">
                      Jagatsinghpur, Odisha, India
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
              Smart Classroom Gallery
            </h2>
          </FadeIn>

          <FadeIn delay={120} className="mt-10">
            <OdishaProjectGallery />
          </FadeIn>
        </div>
      </section>
    </main>
  );
}