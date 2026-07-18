"use client";

import { useEffect, useState } from "react";
import { ArticleSection } from "@/data/educationArticles";

type ArticleSidebarProps = {
  sections: ArticleSection[];
};

export default function ArticleSidebar({
  sections,
}: ArticleSidebarProps) {
  const [activeSection, setActiveSection] = useState(
    sections[0]?.id ?? "",
  );

  useEffect(() => {
    const sectionElements = sections
      .map((section) => document.getElementById(section.id))
      .filter(
        (section): section is HTMLElement => Boolean(section),
      );

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (entryA, entryB) =>
              entryB.intersectionRatio -
              entryA.intersectionRatio,
          );

        if (visibleEntries[0]) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    sectionElements.forEach((section) =>
      observer.observe(section),
    );

    return () => observer.disconnect();
  }, [sections]);

  function scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <aside className="sticky top-32 hidden self-start border border-[#294638] bg-[#FFFAF0] p-5 shadow-sm lg:block">
      <p className="px-3 pb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#6F8172]">
        In This Article
      </p>

      <nav>
        {sections.map((section) => {
          const active = activeSection === section.id;

          return (
            <button
              key={section.id}
              type="button"
              onClick={() => scrollToSection(section.id)}
              className={`block w-full border-t border-[#294638]/15 px-3 py-4 text-left text-sm font-bold transition ${
                active
                  ? "bg-[#233F31] pl-6 text-white"
                  : "hover:bg-[#F1F6C8] hover:pl-6"
              }`}
            >
              {section.title}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}