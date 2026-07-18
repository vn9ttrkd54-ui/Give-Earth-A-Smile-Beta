import PublicProjectCard from "@/components/project/PublicProjectCard";
import {
  getFeaturedProjects,
  getPublishedProjects,
} from "@/lib/projects/publicProjectQueries";

export default async function DatabaseFeaturedProjects() {
  let projects = await getFeaturedProjects(3);

  if (projects.length === 0) {
    projects = (await getPublishedProjects()).slice(0, 3);
  }

  if (projects.length === 0) {
    return (
      <div className="col-span-full border border-[#294638] bg-[#F1F6C8] px-6 py-16 text-center">
        <h3 className="text-3xl">
          Projects Coming Soon
        </h3>

        <p className="mx-auto mt-4 max-w-xl leading-7 text-[#233F31]/65">
          Published projects will appear here after they are added through the
          administration dashboard.
        </p>
      </div>
    );
  }

  return (
    <>
      {projects.map((project) => (
        <PublicProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </>
  );
}