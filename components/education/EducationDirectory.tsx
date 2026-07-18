"use client";

import { useMemo, useState } from "react";
import ArticleCard from "@/components/education/ArticleCard";
import {
  EducationArticle,
  EducationCategory,
  EducationDifficulty,
  educationCategories,
  educationDifficulties,
} from "@/data/educationArticles";

type EducationDirectoryProps = {
  articles: EducationArticle[];
};

type CategoryFilter = "All Categories" | EducationCategory;
type DifficultyFilter = "All Levels" | EducationDifficulty;

export default function EducationDirectory({
  articles,
}: EducationDirectoryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] =
    useState<CategoryFilter>("All Categories");
  const [difficultyFilter, setDifficultyFilter] =
    useState<DifficultyFilter>("All Levels");

  const filteredArticles = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase();

    return articles.filter((article) => {
      const searchableText = [
        article.title,
        article.subtitle,
        article.description,
        article.category,
        article.difficulty,
        article.author,
        ...article.tags,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        normalizedSearch.length === 0 ||
        searchableText.includes(normalizedSearch);

      const matchesCategory =
        categoryFilter === "All Categories" ||
        article.category === categoryFilter;

      const matchesDifficulty =
        difficultyFilter === "All Levels" ||
        article.difficulty === difficultyFilter;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesDifficulty
      );
    });
  }, [
    articles,
    categoryFilter,
    difficultyFilter,
    searchQuery,
  ]);

  function resetFilters() {
    setSearchQuery("");
    setCategoryFilter("All Categories");
    setDifficultyFilter("All Levels");
  }

  return (
    <div>
      <div className="border border-[#294638] bg-[#F1F6C8] p-5 md:p-7">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_260px_220px_auto]">
          <div>
            <label
              htmlFor="education-search"
              className="block text-sm font-bold"
            >
              Search the library
            </label>

            <div className="relative mt-2">
              <input
                id="education-search"
                type="search"
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
                placeholder="Search topics, articles, or tags..."
                className="w-full border border-[#294638] bg-white px-4 py-3 pr-12 outline-none transition focus:ring-2 focus:ring-[#B7CA7F]"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-[#233F31]/60"
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="education-category"
              className="block text-sm font-bold"
            >
              Category
            </label>

            <select
              id="education-category"
              value={categoryFilter}
              onChange={(event) =>
                setCategoryFilter(
                  event.target.value as CategoryFilter,
                )
              }
              className="mt-2 w-full border border-[#294638] bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#B7CA7F]"
            >
              <option>All Categories</option>

              {educationCategories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="education-difficulty"
              className="block text-sm font-bold"
            >
              Reading level
            </label>

            <select
              id="education-difficulty"
              value={difficultyFilter}
              onChange={(event) =>
                setDifficultyFilter(
                  event.target.value as DifficultyFilter,
                )
              }
              className="mt-2 w-full border border-[#294638] bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#B7CA7F]"
            >
              <option>All Levels</option>

              {educationDifficulties.map((difficulty) => (
                <option key={difficulty}>{difficulty}</option>
              ))}
            </select>
          </div>

          <div className="flex items-end">
            <button
              type="button"
              onClick={resetFilters}
              className="w-full border border-[#294638] bg-[#233F31] px-5 py-3 font-bold text-white transition hover:bg-[#6F8172] lg:w-auto"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#294638]/20 pt-5">
          <p className="font-bold">
            {filteredArticles.length}{" "}
            {filteredArticles.length === 1
              ? "resource"
              : "resources"}{" "}
            found
          </p>

          {(searchQuery ||
            categoryFilter !== "All Categories" ||
            difficultyFilter !== "All Levels") && (
            <p className="text-sm text-[#233F31]/65">
              Filters are currently active
            </p>
          )}
        </div>
      </div>

      {filteredArticles.length === 0 ? (
        <div className="mt-10 border border-[#294638] bg-[#FFFAF0] px-6 py-20 text-center">
          <h3 className="text-4xl">No resources found</h3>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#233F31]/75">
            Try another search term or reset the category and
            reading-level filters.
          </p>

          <button
            type="button"
            onClick={resetFilters}
            className="mt-7 bg-[#233F31] px-8 py-4 font-bold text-white"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}