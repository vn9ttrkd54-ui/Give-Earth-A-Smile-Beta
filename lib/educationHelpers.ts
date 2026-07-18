import {
  EducationArticle,
  EducationCategory,
  EducationDifficulty,
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

export function getFeaturedEducationArticles(): EducationArticle[] {
  return educationArticles.filter((article) => article.featured);
}

export function getEducationArticlesByCategory(
  category: EducationCategory,
): EducationArticle[] {
  return educationArticles.filter(
    (article) => article.category === category,
  );
}

export function getEducationArticlesByDifficulty(
  difficulty: EducationDifficulty,
): EducationArticle[] {
  return educationArticles.filter(
    (article) => article.difficulty === difficulty,
  );
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