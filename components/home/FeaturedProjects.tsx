import Link from "next/link";
import PublicProjectCard from "@/components/project/PublicProjectCard";
import {
  getAllProjects,
  getFeaturedProjects,
} from "@/data/projects";

export default function FeaturedProjects() {
  let projects = getFeaturedProjects(3);

  // Keep the home page populated when no projects are marked as featured.
  if (projects.length === 0) {
    projects = getAllProjects().slice(0, 3);
  }

  if (projects.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#FFFAF0]">
      <div className="mx-auto max-w-7xl">
        <div className="border-t border-[#294638] pt-6">
          <div className="flex justify-end">
            <Link
              href="/projects"
              className="font-bold underline decoration-2 underline-offset-8"
            >
              Explore All Projects →
            </Link>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <PublicProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
