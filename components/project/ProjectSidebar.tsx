"use client";

import { useEffect, useState } from "react";

type ProjectSidebarProps = {
  variant: "mobile" | "desktop";
};

type NavigationItem = {
  id: string;
  label: string;
};

const navigationItems: NavigationItem[] = [
  { id: "overview", label: "Overview" },
  { id: "statistics", label: "Impact" },
  { id: "goals", label: "Goals and Results" },
  { id: "timeline", label: "Timeline" },
  { id: "gallery", label: "Gallery" },
  { id: "leadership", label: "Leadership" },
];

export default function ProjectSidebar({
  variant,
}: ProjectSidebarProps) {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const sections = navigationItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (entryA, entryB) =>
              entryB.intersectionRatio - entryA.intersectionRatio,
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

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);

    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  if (variant === "mobile") {
    return (
      <div className="sticky top-[88px] z-30 border-y border-[#294638]/20 bg-[#FFFAF0]/95 px-4 py-3 backdrop-blur lg:hidden">
        <label htmlFor="project-section" className="sr-only">
          Select project section
        </label>

        <select
          id="project-section"
          value={activeSection}
          onChange={(event) => scrollToSection(event.target.value)}
          className="w-full border border-[#294638] bg-white px-4 py-3 font-bold outline-none"
        >
          {navigationItems.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <aside className="sticky top-32 self-start border border-[#294638] bg-[#FFFAF0] p-5 shadow-sm">
      <p className="px-3 pb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#6F8172]">
        Project Sections
      </p>

      <nav>
        {navigationItems.map((item) => {
          const active = activeSection === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={`block w-full border-t border-[#294638]/15 px-3 py-4 text-left font-bold transition ${
                active
                  ? "bg-[#233F31] pl-6 text-white"
                  : "text-[#233F31] hover:bg-[#F1F6C8] hover:pl-6"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}