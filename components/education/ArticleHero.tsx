import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { EducationArticle } from "@/data/educationArticles";

type ArticleHeroProps = {
  article: EducationArticle;
};

export default function ArticleHero({
  article,
}: ArticleHeroProps) {
  return (
    <section className="relative flex min-h-[680px] items-end overflow-hidden">
      <Image
        src={article.coverImage}
        alt={article.title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/90" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-40 text-white md:pb-24">
        <FadeIn direction="down">
          <Link
            href="/education"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-white/80 transition hover:text-white"
          >
            ← Education Library
          </Link>
        </FadeIn>

        <FadeIn delay={90}>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="bg-[#B7CA7F] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#233F31]">
              {article.category}
            </span>

            <span className="border border-white/60 bg-black/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] backdrop-blur-sm">
              {article.difficulty}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={170}>
          <h1 className="mt-7 max-w-5xl text-5xl leading-tight sm:text-6xl md:text-7xl">
            {article.title}
          </h1>
        </FadeIn>

        <FadeIn delay={250}>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-white/90">
            {article.subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={330}>
          <div className="mt-9 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/30 pt-7 text-sm">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                Published
              </p>

              <p className="mt-2 font-semibold">
                {article.publishedDate}
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                Reading Time
              </p>

              <p className="mt-2 font-semibold">
                {article.readingTime} minutes
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                Author
              </p>

              <p className="mt-2 font-semibold">{article.author}</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}