import Image from "next/image";
import Link from "next/link";
import { EducationArticle } from "@/data/educationArticles";

type ArticleCardProps = {
  article: EducationArticle;
};

function getDifficultyClasses(
  difficulty: EducationArticle["difficulty"],
) {
  switch (difficulty) {
    case "Beginner":
      return "bg-[#B7CA7F] text-[#233F31]";

    case "Intermediate":
      return "bg-[#6F8172] text-white";

    case "Advanced":
      return "bg-[#233F31] text-white";
  }
}

export default function ArticleCard({
  article,
}: ArticleCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-[#294638] bg-[#FFFAF0] shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <Link
        href={`/education/${article.slug}`}
        className="relative block aspect-[16/10] overflow-hidden"
      >
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute left-4 top-4">
          <span
            className={`px-3 py-2 text-[10px] font-bold uppercase tracking-[0.15em] ${getDifficultyClasses(
              article.difficulty,
            )}`}
          >
            {article.difficulty}
          </span>
        </div>

        <p className="absolute bottom-4 left-4 right-4 text-xs font-bold uppercase tracking-[0.16em] text-white">
          {article.category}
        </p>
      </Link>

      <div className="flex flex-1 flex-col p-7">
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#6F8172]">
          <span>{article.publishedDate}</span>
          <span aria-hidden="true">•</span>
          <span>{article.readingTime} min read</span>
        </div>

        <h3 className="mt-4 text-3xl leading-tight">
          <Link href={`/education/${article.slug}`}>
            {article.title}
          </Link>
        </h3>

        <p className="mt-5 flex-1 leading-7 text-[#233F31]/80">
          {article.description}
        </p>

        <Link
          href={`/education/${article.slug}`}
          className="mt-7 inline-flex items-center gap-3 font-bold"
        >
          Read Article

          <span className="transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}