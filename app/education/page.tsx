import Link from "next/link";
import EducationDirectory from "@/components/education/EducationDirectory";
import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { getAllEducationArticles } from "@/lib/educationHelpers";

export default function EducationPage() {
  const articles = getAllEducationArticles();

  const categoryCount = new Set(
    articles.map((article) => article.category),
  ).size;

  return (
    <main>
      <section className="bg-[#233F31] px-6 py-20 text-white md:py-28">
        <FadeIn className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B7CA7F]">
            Learn, Discuss, Act
          </p>

          <h1 className="mt-5 text-5xl leading-tight sm:text-6xl md:text-7xl">
            Education
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/85">
            Explore environmental lessons, community action guides,
            discussion resources, and educational articles created for
            students and volunteers.
          </p>
        </FadeIn>
      </section>

      <section className="bg-[#F1F6C8] px-6 pb-8 pt-12 md:pb-10 md:pt-14">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
          <FadeIn>
            <article className="border border-[#294638] bg-[#FFFAF0] p-7 text-center">
              <p className="font-[var(--font-heading)] text-5xl">
                {articles.length}
              </p>

              <p className="mt-3 font-bold">
                Educational Resources
              </p>
            </article>
          </FadeIn>

          <FadeIn delay={80}>
            <article className="border border-[#294638] bg-[#FFFAF0] p-7 text-center">
              <p className="font-[var(--font-heading)] text-5xl">
                {categoryCount}
              </p>

              <p className="mt-3 font-bold">
                Topic Categories
              </p>
            </article>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#F1F6C8] px-6 pb-20 pt-8 md:pb-28 md:pt-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Education Library"
            title="Explore All Articles"
            description="Browse our complete collection of environmental education articles. Search by title or keyword and filter resources by category and reading level."
          />

          <FadeIn delay={100} className="mt-10">
            <EducationDirectory articles={articles} />
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#233F31] px-6 py-20 text-center text-white md:py-28">
        <FadeIn className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B7CA7F]">
            Bring Education to Your Community
          </p>

          <h2 className="mt-5 text-5xl leading-tight md:text-6xl">
            Lead an Environmental Workshop
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/80">
            Ambassadors and volunteers can use these resources to organize
            discussions, lessons, and community outreach activities.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/join"
              className="bg-[#B7CA7F] px-10 py-4 font-bold text-[#233F31] transition hover:-translate-y-1 hover:bg-white"
            >
              Become an Ambassador
            </Link>

            <Link
              href="/contact"
              className="border border-white px-10 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#233F31]"
            >
              Contact Our Team
            </Link>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}