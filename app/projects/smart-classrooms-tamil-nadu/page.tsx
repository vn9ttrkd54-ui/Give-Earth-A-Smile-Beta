import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import TamilNaduProjectGallery from "@/components/project/TamilNaduProjectGallery";
import TamilNaduProjectVideos from "@/components/project/TamilNaduProjectVideos";
import Link from "next/link";
import { getProjectBySlug } from "@/data/projects";

const challenges = [
  "Limited access to modern educational technology and digital learning resources.",
  "Lack of adequate classroom materials and infrastructure to support interactive learning.",
  "Limited access to quality sports equipment and resources for athletic training.",
  "Students may lack the resources necessary to develop athletic skills and prepare for competitive and state-level sports opportunities.",
  "A powerful opportunity to encourage students to engage in physical activity, teamwork, and sports development from a young age.",
  "Access to technology can create more interactive and engaging learning experiences for students.",
  "Schools can function as centers for education, physical development, and opportunity within their communities.",
];

const solutions = [
  "Provide a 75-inch interactive LED display to support technology-enabled and interactive learning.",
  "Provide a 50-inch television and wooden TV stand for educational and classroom use.",
  "Provide two standing tables and a wooden easel board.",
  "Provide additional classroom materials to support student learning.",
  "Donate sports equipment to improve opportunities for athletic development and training.",
  "Provide 48 footballs to encourage participation and support football training.",
  "Provide 12 sets of badminton shuttles.",
  "Provide one chess board to support strategic thinking and recreational learning.",
  "Provide 12 bats/volley footballs for student sports activities and training.",
  "Provide one set of foam numbers for educational and activity-based learning.",
  "Provide one sewing kit to support creative and practical learning activities.",
  "Upgrade the school's sports equipment to help students develop athletic skills and prepare for state-level sports tournaments and training opportunities.",
];

const benefits = [
  {
    title: "Interactive Learning",
    description:
      "Modern educational technology and classroom resources can create more engaging, interactive, and visually enriched learning experiences.",
  },
  {
    title: "Athletic Development",
    description:
      "Improved sports equipment gives students greater opportunities to practice, develop skills, and prepare for competitive sports.",
  },
  {
    title: "Holistic Development",
    description:
      "Educational, physical, creative, and activity-based resources support students both inside and outside the classroom.",
  },
  {
    title: "Expanded Opportunities",
    description:
      "Students gain improved access to learning, teamwork, physical activity, sports training, and opportunities to explore their interests.",
  },
];

const phases = [
  {
    number: "01",
    title: "Planning and Coordination",
    description:
      "The target school was identified, partnerships were established, classroom and sports equipment requirements were determined, and the project budget and fundraising goals were developed.",
  },
  {
    number: "02",
    title: "Fundraising and Project Preparation",
    description:
      "Give Earth a Smile raised more than ₹90,000, determined educational technology and classroom material needs, identified sports equipment requirements, and procured project resources.",
  },
  {
    number: "03",
    title: "Installation and Distribution",
    description:
      "Educational technology and classroom materials were provided while 87 sports and activity equipment pieces and sets were distributed to support learning, physical activity, and athletic development.",
  },
  {
    number: "04",
    title: "Classroom Use and Future Educational Opportunities",
    description:
      "Students and teachers began using the educational technology, classroom resources, and sports equipment while long-term educational and extracurricular impact continues to be evaluated.",
  },
];

const goals = [
  {
    number: "4",
    title: "Quality Education",
    image: "/images/sdg/sdg-4.png",
    description:
      "Expanding access to modern educational technology, improved classroom resources, and more engaging learning opportunities.",
  },
  {
    number: "10",
    title: "Reduced Inequalities",
    image: "/images/sdg/sdg-10.png",
    description:
      "Helping reduce educational, digital, and extracurricular inequalities affecting students in underserved communities.",
  },
  {
    number: "17",
    title: "Partnerships for the Goals",
    image: "/images/sdg/sdg-17.png",
    description:
      "Uniting Give Earth a Smile, Pudhiya Shakti, school leaders, teachers, and local partners around shared educational and developmental goals.",
  },
];

export default function SmartClassroomsTamilNaduPage() {
  const project = getProjectBySlug(
    "smart-classrooms-tamil-nadu"
  );

  if (!project) {
    return null;
  }

  return (
    <main className="bg-[#FFFAF0] text-[#233F31]">
      {/* Hero */}
      <section className="bg-[#233F31] px-6 py-20 text-white md:py-24">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <Link
                href="/projects"
                className="mb-10 inline-flex items-center gap-3 border border-white/50 px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#233F31]"
            >
            <span aria-hidden="true">←</span>
                Back to Projects
            </Link>
            
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B7CA7F]">
              Fall 2025 · Nagapattinam, Tamil Nadu, India
            </p>

            <h1 className="mt-8 max-w-5xl text-5xl leading-[1.05] md:text-7xl">
              Smart Classrooms in Tamil Nadu
            </h1>
            <ProjectHighlights photos={project.featuredPhotos ?? []} />

            <p className="mt-8 max-w-4xl text-lg leading-8 text-white/75 md:text-xl">
              Expanding access to technology-enabled education, classroom
              resources, sports equipment, and opportunities for student
              development.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Article + Sidebar */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          {/* LEFT */}
          <FadeIn className="min-w-0">
            <article>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6F8172]">
                Project Article
              </p>

              {/* Full article */}
              <div className="mt-8 space-y-7 text-[17px] leading-9 text-[#233F31]/80">
                <p>
                  Give Earth a Smile acknowledges that many students in
                  underserved communities in Tamil Nadu experience limited
                  access to modern educational technology, classroom resources,
                  and sports equipment. Students can face barriers that limit
                  their opportunities for engaging learning, physical activity,
                  athletic development, and participation in competitive
                  sports. Providing students with improved educational
                  resources and sports equipment creates an opportunity to
                  support both academic learning and physical development while
                  encouraging students to explore their interests and reach
                  their potential.
                </p>

                <p>
                  To address these issues, Give Earth a Smile partnered with
                  Pudhiya Shakti to support the development of a
                  technology-enabled learning environment at a primary school
                  in Nagapattinam, Tamil Nadu. The project aims to improve
                  students&apos; access to educational technology and classroom
                  materials while strengthening sports resources to encourage
                  athletic development and create opportunities for students to
                  pursue competitive sports.
                </p>

                <p>
                  Students and the school community in Nagapattinam, Tamil Nadu
                  will receive educational, technological, physical, and social
                  benefits through improved access to classroom resources and
                  sports equipment. The project will provide students with a
                  more engaging learning environment while encouraging physical
                  activity, teamwork, and athletic development.
                </p>

                <p>
                  By strengthening the school&apos;s sports resources, students
                  will have greater opportunities to practice and develop their
                  skills and pursue competitive sports opportunities. The
                  project impacted 150+ students across 4 classes and was made
                  possible through more than ₹90,000 raised for the project.
                </p>

                <p>
                  By investing in educational technology, classroom materials,
                  and sports equipment, the project seeks to create lasting
                  opportunities for students to learn, grow, and pursue their
                  interests. The Smart Classrooms in Tamil Nadu project further
                  advances the purpose of Give Earth a Smile: educating and
                  empowering global citizens while creating meaningful and
                  sustainable opportunities for underserved communities.
                </p>
              </div>

              {/* Objective */}
              <div className="mt-12 border-l-4 border-[#6F8172] bg-[#F1F6C8] px-7 py-7">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#6F8172]">
                  Project Objective
                </p>

                <p className="mt-5 text-lg leading-8">
                  Expand students&apos; access to modern educational
                  technology, classroom resources, and sports equipment while
                  creating opportunities for students to engage in interactive
                  learning, develop athletic skills, and pursue state-level
                  sports training and competitions.
                </p>
              </div>

              {/* Challenges */}
              <section className="mt-14">
                <h2 className="text-3xl md:text-4xl">
                  Challenges and Opportunities
                </h2>

                <div className="mt-7">
                  {challenges.map((challenge) => (
                    <div
                      key={challenge}
                      className="flex gap-5 border-b border-[#294638]/15 py-5"
                    >
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#6F8172]" />

                      <p className="text-base leading-8 text-[#233F31]/80">
                        {challenge}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Solution */}
              <section className="mt-14">
                <h2 className="text-3xl md:text-4xl">
                  Proposed Solution
                </h2>

                <div className="mt-7">
                  {solutions.map((solution) => (
                    <div
                      key={solution}
                      className="flex gap-5 border-b border-[#294638]/15 py-5"
                    >
                      <span className="text-xl font-bold text-[#6F8172]">
                        ✓
                      </span>

                      <p className="text-base leading-8 text-[#233F31]/80">
                        {solution}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Benefits */}
              <section className="mt-14">
                <h2 className="text-3xl md:text-4xl">
                  Project Benefits
                </h2>

                <div className="mt-7 grid gap-5 md:grid-cols-2">
                  {benefits.map((benefit) => (
                    <div
                      key={benefit.title}
                      className="border border-[#294638] bg-[#F1F6C8] p-6"
                    >
                      <h3 className="text-2xl">
                        {benefit.title}
                      </h3>

                      <p className="mt-4 leading-8 text-[#233F31]/70">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Implementation */}
              <section className="mt-14">
                <h2 className="text-3xl md:text-4xl">
                  Implementation Phases
                </h2>

                <div className="mt-7 space-y-5">
                  {phases.map((phase) => (
                    <div
                      key={phase.number}
                      className="grid border border-[#294638] bg-[#F1F6C8] p-6 md:grid-cols-[90px_1fr] md:p-7"
                    >
                      <p className="font-[var(--font-heading)] text-4xl text-[#6F8172]">
                        {phase.number}
                      </p>

                      <div>
                        <h3 className="text-2xl">
                          {phase.title}
                        </h3>

                        <p className="mt-4 leading-8 text-[#233F31]/70">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </article>
          </FadeIn>

          {/* RIGHT SIDEBAR */}
          <FadeIn delay={100} className="min-w-0">
            <aside className="space-y-7 lg:sticky lg:top-28">
              {/* Project File */}
              <div className="border border-[#294638] bg-[#F1F6C8] p-7">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#6F8172]">
                  Project File
                </p>

                <h2 className="mt-5 text-3xl">
                  Full Project Profile
                </h2>

                <p className="mt-5 leading-8 text-[#233F31]/65">
                  Read the complete project profile, implementation plan,
                  objectives, responsibilities, and expected outcomes.
                </p>

                <a
                  href="/files/smart-classrooms-tamil-nadu.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 block bg-[#233F31] px-5 py-4 text-center font-bold text-white transition hover:bg-[#6F8172]"
                >
                  Open Project File
                </a>
              </div>

              {/* Impact */}
              <div className="bg-[#233F31] p-7 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#B7CA7F]">
                  Project Impact
                </p>

                <div className="mt-7">
                  <p className="font-[var(--font-heading)] text-4xl text-[#D9E58F]">
                    ₹90,000+
                  </p>

                  <p className="mt-2 font-bold text-white/70">
                    Approximately $1,040 USD
                  </p>

                  <p className="mt-3 text-white/75">
                    Raised for the project
                  </p>
                </div>

                <div className="mt-7 border-t border-white/20 pt-7">
                  <p className="font-[var(--font-heading)] text-4xl text-[#D9E58F]">
                    150+
                  </p>

                  <p className="mt-3 text-white/75">
                    Students impacted
                  </p>
                </div>

                <div className="mt-7 border-t border-white/20 pt-7">
                  <p className="font-[var(--font-heading)] text-4xl text-[#D9E58F]">
                    4
                  </p>

                  <p className="mt-3 text-white/75">
                    Classes benefiting
                  </p>
                </div>

                <div className="mt-7 border-t border-white/20 pt-7">
                  <p className="font-[var(--font-heading)] text-4xl text-[#D9E58F]">
                    87
                  </p>

                  <p className="mt-3 leading-7 text-white/75">
                    Sports and activity equipment pieces and sets donated
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="border border-[#294638] bg-[#FFFAF0] p-7">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#6F8172]">
                  Project Details
                </p>

                <div className="mt-7 space-y-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#6F8172]">
                      Partner
                    </p>

                    <p className="mt-2 font-bold">
                      Pudhiya Shakti
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#6F8172]">
                      School
                    </p>

                    <p className="mt-2 font-bold">
                      Primary School in Nagapattinam
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#6F8172]">
                      Location
                    </p>

                    <p className="mt-2 font-bold">
                      Nagapattinam, Tamil Nadu, India
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#6F8172]">
                      Status
                    </p>

                    <p className="mt-2 font-bold">
                      Completed
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </FadeIn>
        </div>
      </section>

      {/* SDGs */}
      <section className="bg-[#F1F6C8] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#6F8172]">
              Global Goals
            </p>

            <h2 className="mt-5 text-4xl text-[#233F31] md:text-5xl">
              UN Sustainable Development Goals
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {goals.map((goal) => (
              <FadeIn key={goal.number}>
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

                    <h3 className="mt-2 text-2xl text-[#233F31]">
                      {goal.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#233F31]/70">
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

            <h2 className="mt-5 text-4xl text-[#233F31] md:text-5xl">
              Smart Classroom Gallery
            </h2>
          </FadeIn>

          <FadeIn delay={120} className="mt-10">
            <TamilNaduProjectGallery
              images={project.gallery}
            />
          </FadeIn>
        </div>
      </section>

      {/* Videos */}
      <section className="bg-[#F1F6C8] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#6F8172]">
              Project Videos
            </p>

            <h2 className="mt-5 text-4xl text-[#233F31] md:text-5xl">
              Smart Classroom Videos
            </h2>
          </FadeIn>

          <FadeIn delay={120} className="mt-10">
            <TamilNaduProjectVideos />
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
import ProjectHighlights from "@/components/project/ProjectHighlights";
