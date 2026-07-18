import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleCard from "@/components/education/ArticleCard";
import ArticleContent from "@/components/education/ArticleContent";
import ArticleHero from "@/components/education/ArticleHero";
import ArticleSidebar from "@/components/education/ArticleSidebar";
import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { educationArticles } from "@/data/educationArticles";
import {
  getEducationArticleBySlug,
  getRelatedEducationArticles,
} from "@/lib/educationHelpers";

type EducationArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return educationArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: EducationArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getEducationArticleBySlug(slug);

  if (!article) {
    return {
      title: "Resource Not Found | Give Earth a Smile",
    };
  }

  return {
    title: `${article.title} | Give Earth a Smile`,
    description: article.description,
  };
}

export default async function EducationArticlePage({
  params,
}: EducationArticlePageProps) {
  const { slug } = await params;
  const article = getEducationArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles =
    getRelatedEducationArticles(article);

  return (
    <main>
      <ArticleHero article={article} />

      <section className="bg-[#FFFAF0] px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[260px_minmax(0,1fr)]">
          <ArticleSidebar sections={article.sections} />

          <article className="min-w-0">
            <ArticleContent article={article} />

            <section className="mt-24 scroll-mt-36">
              <div className="grid gap-8 xl:grid-cols-2">
                <FadeIn direction="right">
                  <div className="h-full border border-[#294638] bg-[#F1F6C8] p-8 md:p-10">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6F8172]">
                      Main Takeaways
                    </p>

                    <h2 className="mt-4 text-4xl">
                      What to Remember
                    </h2>

                    <div className="mt-8 space-y-5">
                      {article.takeaways.map(
                        (takeaway, index) => (
                          <div
                            key={takeaway}
                            className="flex gap-4"
                          >
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#233F31] text-sm font-bold text-white">
                              {index + 1}
                            </span>

                            <p className="pt-1 leading-7">
                              {takeaway}
                            </p>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </FadeIn>

                <FadeIn direction="left">
                  <div className="h-full border border-[#294638] bg-[#233F31] p-8 text-white md:p-10">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B7CA7F]">
                      Discussion Questions
                    </p>

                    <h2 className="mt-4 text-4xl text-white">
                      Continue the Conversation
                    </h2>

                    <div className="mt-8 space-y-5">
                      {article.discussionQuestions.map(
                        (question) => (
                          <div
                            key={question}
                            className="flex gap-4"
                          >
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#B7CA7F] font-bold text-[#233F31]">
                              ?
                            </span>

                            <p className="pt-1 leading-7 text-white/85">
                              {question}
                            </p>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </FadeIn>
              </div>
            </section>

            <FadeIn>
              <section className="mt-16 border border-[#294638] bg-[#F1F6C8] p-8 md:p-10">
                <div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6F8172]">
                      Written By
                    </p>

                    <h2 className="mt-3 text-3xl">
                      {article.author}
                    </h2>

                    <p className="mt-2 font-bold text-[#6F8172]">
                      {article.authorRole}
                    </p>

                    {article.updatedDate && (
                      <p className="mt-4 text-sm text-[#233F31]/65">
                        Last updated {article.updatedDate}
                      </p>
                    )}
                  </div>

                  {article.downloadableResource && (
                    <a
                      href={
                        article.downloadableResource.href
                      }
                      className="shrink-0 border border-[#294638] bg-[#233F31] px-7 py-4 text-center font-bold text-white transition hover:-translate-y-1 hover:bg-[#6F8172]"
                    >
                      {
                        article.downloadableResource
                          .label
                      }
                    </a>
                  )}
                </div>

                <div className="mt-7 flex flex-wrap gap-3 border-t border-[#294638]/20 pt-7">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-[#294638] bg-[#FFFAF0] px-4 py-2 text-xs font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </section>
            </FadeIn>
          </article>
        </div>
      </section>

      {relatedArticles.length > 0 && (
        <section className="bg-[#F1F6C8] px-6 py-20 md:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Continue Learning"
              title="Related Resources"
              description="Explore more environmental lessons and community action guides."
            />

            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {relatedArticles.map(
                (relatedArticle, index) => (
                  <FadeIn
                    key={relatedArticle.id}
                    delay={index * 100}
                    className="h-full"
                  >
                    <ArticleCard
                      article={relatedArticle}
                    />
                  </FadeIn>
                ),
              )}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#233F31] px-6 py-20 text-center text-white md:py-24">
        <FadeIn className="mx-auto max-w-3xl">
          <h2 className="text-5xl leading-tight">
            Put Learning Into Action
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Use what you learned to begin a project, organize a
            discussion, or support environmental action in your
            community.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/projects"
              className="bg-[#B7CA7F] px-9 py-4 font-bold text-[#233F31] transition hover:bg-white"
            >
              Explore Projects
            </Link>

            <Link
              href="/education"
              className="border border-white px-9 py-4 font-bold transition hover:bg-white hover:text-[#233F31]"
            >
              More Resources
            </Link>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}