import {
  EducationArticle,
  educationArticles,
} from "@/data/educationArticles";

export function getAllEducationArticles(): EducationArticle[] {
  return educationArticles;
}

export function getEducationArticleBySlug(
  slug: string,
): EducationArticle | undefined {
  return educationArticles.find((article) => article.slug === slug);
}




export function getRelatedEducationArticles(
  article: EducationArticle,
): EducationArticle[] {
  const manuallyRelatedArticles = article.relatedArticleSlugs
    .map((slug) => getEducationArticleBySlug(slug))
    .filter(
      (relatedArticle): relatedArticle is EducationArticle =>
        Boolean(relatedArticle),
    );

  if (manuallyRelatedArticles.length > 0) {
    return manuallyRelatedArticles.slice(0, 3);
  }

  return educationArticles
    .filter(
      (candidate) =>
        candidate.slug !== article.slug &&
        candidate.category === article.category,
    )
    .slice(0, 3);
}
