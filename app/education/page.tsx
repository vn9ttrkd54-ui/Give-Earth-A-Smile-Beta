import Link from "next/link";
import ArticleCard from "@/components/education/ArticleCard";
import EducationDirectory from "@/components/education/EducationDirectory";
import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import {
  getAllEducationArticles,
  getFeaturedEducationArticles,
} from "@/lib/educationHelpers";

export default function EducationPage() {
  const articles = getAllEducationArticles();
  const featuredArticles = getFeaturedEducationArticles();

  const categoryCount = new Set(
    articles.map((article) => article.category),
  ).size;

  const totalReadingTime = articles.reduce(
    (total, article) => total + article.readingTime,
    0,
  );

  return (
    <main>
      <section className="bg-[#233F31] px-6 py-20 text-white md:py-28">
        <FadeIn className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B7CA7F]">
            Learn, Discuss, Act
          </p>

          <h1 className="mt-5 text-5xl leading-tight sm:text-6xl md:text-7xl">
            Education and Outreach
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/85">
            Explore environmental lessons, community action guides,
            discussion resources, and educational articles created
            for students and volunteers.
          </p>
        </FadeIn>
      </section>

      <section className="bg-[#F1F6C8] px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-3">
          <FadeIn>
            <article className="border border-[#294638] bg-[#FFFAF0] p-7 text-center">
              <p className="font-[var(--font-heading)] text-5xl">
                {articles.length}
              </p>

              <p className="mt-3 font-bold">Educational Resources</p>
            </article>
          </FadeIn>

          <FadeIn delay={80}>
            <article className="border border-[#294638] bg-[#FFFAF0] p-7 text-center">
              <p className="font-[var(--font-heading)] text-5xl">
                {categoryCount}
              </p>

              <p className="mt-3 font-bold">Topic Categories</p>
            </article>
          </FadeIn>

          <FadeIn delay={160}>
            <article className="border border-[#294638] bg-[#FFFAF0] p-7 text-center">
              <p className="font-[var(--font-heading)] text-5xl">
                {totalReadingTime}
              </p>

              <p className="mt-3 font-bold">Minutes of Learning</p>
            </article>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#FFFAF0] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Featured Learning"
            title="Start Exploring"
            description="Featured environmental lessons and community action guides from our education team."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {featuredArticles.slice(0, 3).map((article, index) => (
              <FadeIn
                key={article.id}
                delay={index * 100}
                className="h-full"
              >
                <ArticleCard article={article} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F1F6C8] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Resource Library"
            title="Find a Topic"
            description="Search by subject, title, or keyword and filter resources by category and reading level."
          />

          <FadeIn delay={100} className="mt-14">
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
            Ambassadors and volunteers can use these resources to
            organize discussions, lessons, and community outreach
            activities.
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