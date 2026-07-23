import Link from "next/link";
import PublicProjectCard from "@/components/project/PublicProjectCard";
import type { Project } from "@/data/projects";

type PublicProjectDirectoryProps = {
  projects: Project[];
  categories: string[];
  countries: string[];
  search: string;
  selectedCategory: string;
  selectedCountry: string;
};

export default function PublicProjectDirectory({
  projects,
  categories,
  countries,
  search,
  selectedCategory,
  selectedCountry,
}: PublicProjectDirectoryProps) {
  return (
    <>
      <form className="border border-[#294638] bg-[#FFFAF0] p-6 shadow-sm">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_220px_220px_auto]">
          <div>
            <label
              htmlFor="search"
              className="block text-sm font-bold text-[#233F31]"
            >
              Search projects
            </label>

            <input
              id="search"
              name="search"
              type="search"
              defaultValue={search}
              placeholder="Search by title, location, country, or topic..."
              className="mt-2 w-full border border-[#294638] bg-white px-4 py-3 text-[#233F31] outline-none transition focus:ring-2 focus:ring-[#B7CA7F]"
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-bold text-[#233F31]"
            >
              Category
            </label>

            <select
              id="category"
              name="category"
              defaultValue={selectedCategory}
              className="mt-2 w-full border border-[#294638] bg-white px-4 py-3 text-[#233F31] outline-none transition focus:ring-2 focus:ring-[#B7CA7F]"
            >
              <option value="all">All categories</option>

              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="country"
              className="block text-sm font-bold text-[#233F31]"
            >
              Country
            </label>

            <select
              id="country"
              name="country"
              defaultValue={selectedCountry}
              className="mt-2 w-full border border-[#294638] bg-white px-4 py-3 text-[#233F31] outline-none transition focus:ring-2 focus:ring-[#B7CA7F]"
            >
              <option value="all">All countries</option>

              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-end gap-3">
            <button
              type="submit"
              className="bg-[#233F31] px-6 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#6F8172]"
            >
              Apply
            </button>

            <Link
              href="/projects"
              className="border border-[#294638] px-6 py-3 font-bold text-[#233F31] transition hover:-translate-y-0.5 hover:bg-[#233F31] hover:text-white"
            >
              Reset
            </Link>
          </div>
        </div>
      </form>

      <p className="mt-8 font-bold text-[#233F31]/70">
        {projects.length} {projects.length === 1 ? "project" : "projects"} found
      </p>

      {projects.length > 0 ? (
        <div className="mt-7 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <PublicProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      ) : (
        <div className="mt-8 border border-[#294638] bg-[#FFFAF0] px-6 py-20 text-center">
          <h2 className="text-4xl">No Projects Found</h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#233F31]/65">
            No projects match the current search and filter settings.
          </p>

          <Link
            href="/projects"
            className="mt-8 inline-block bg-[#233F31] px-8 py-4 font-bold text-white transition hover:bg-[#6F8172]"
          >
            View All Projects
          </Link>
        </div>
      )}
    </>
  );
}