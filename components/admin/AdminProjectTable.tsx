import Link from "next/link";
import DeleteProjectButton from "@/components/admin/DeleteProjectButton";
import { toggleProjectPublished } from "@/app/admin/projects/actions";
import type {
  DatabaseProject,
  ProjectStatus,
} from "@/lib/types/databaseProject";

type AdminProjectTableProps = {
  projects: DatabaseProject[];
};

function getStatusClasses(
  status: ProjectStatus,
) {
  switch (status) {
    case "published":
      return "bg-[#B7CA7F] text-[#233F31]";

    case "archived":
      return "bg-[#233F31]/15 text-[#233F31]";

    default:
      return "bg-[#E9D9A0] text-[#4A401D]";
  }
}

export default function AdminProjectTable({
  projects,
}: AdminProjectTableProps) {
  if (projects.length === 0) {
    return (
      <div className="border border-[#294638] bg-[#FFFAF0] px-6 py-20 text-center">
        <h2 className="text-4xl">
          No Projects Found
        </h2>

        <p className="mx-auto mt-5 max-w-xl leading-7 text-[#233F31]/65">
          Create your first project or change the
          current search filters.
        </p>

        <Link
          href="/admin/projects/new"
          className="mt-8 inline-block bg-[#233F31] px-8 py-4 font-bold text-white"
        >
          Create Project
        </Link>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto border border-[#294638] bg-[#FFFAF0]">
      <table className="min-w-[1050px] w-full border-collapse text-left">
        <thead className="bg-[#233F31] text-white">
          <tr>
            <TableHeading>Project</TableHeading>
            <TableHeading>Location</TableHeading>
            <TableHeading>Status</TableHeading>
            <TableHeading>Impact</TableHeading>
            <TableHeading>Updated</TableHeading>
            <TableHeading>Actions</TableHeading>
          </tr>
        </thead>

        <tbody>
          {projects.map((project) => {
            const toggleAction =
              toggleProjectPublished.bind(
                null,
                project.id,
                project.status,
              );

            return (
              <tr
                key={project.id}
                className="border-t border-[#294638]/20 align-top"
              >
                <td className="p-5">
                  <div className="max-w-xs">
                    <p className="font-bold">
                      {project.title}
                    </p>

                    <p className="mt-2 text-xs text-[#233F31]/55">
                      /projects/{project.slug}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="border border-[#294638]/30 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em]">
                        {project.category}
                      </span>

                      {project.featured && (
                        <span className="bg-[#F1F6C8] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em]">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                </td>

                <td className="p-5">
                  <p className="font-semibold">
                    {project.country}
                  </p>

                  {project.city && (
                    <p className="mt-1 text-sm text-[#233F31]/60">
                      {project.city}
                    </p>
                  )}
                </td>

                <td className="p-5">
                  <span
                    className={`inline-block px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] ${getStatusClasses(
                      project.status,
                    )}`}
                  >
                    {project.status}
                  </span>
                </td>

                <td className="p-5">
                  <p className="font-bold">
                    {project.people_reached.toLocaleString()}
                  </p>

                  <p className="mt-1 text-xs text-[#233F31]/60">
                    people reached
                  </p>

                  <p className="mt-3 font-bold">
                    {project.volunteer_hours.toLocaleString()}
                  </p>

                  <p className="mt-1 text-xs text-[#233F31]/60">
                    volunteer hours
                  </p>
                </td>

                <td className="p-5 text-sm">
                  {new Intl.DateTimeFormat(
                    "en-US",
                    {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    },
                  ).format(
                    new Date(project.updated_at),
                  )}
                </td>

                <td className="p-5">
                  <div className="flex flex-col items-start gap-4">
                    <Link
                      href={`/admin/projects/${project.id}/edit`}
                      className="font-bold underline underline-offset-4"
                    >
                      Edit
                    </Link>

                    <form action={toggleAction}>
                      <button
                        type="submit"
                        className="text-sm font-bold underline underline-offset-4"
                      >
                        {project.status ===
                        "published"
                          ? "Move to Draft"
                          : "Publish"}
                      </button>
                    </form>

                    {project.status ===
                      "published" && (
                      <Link
                        href={`/projects/${project.slug}`}
                        target="_blank"
                        className="text-sm font-bold underline underline-offset-4"
                      >
                        View Public Page ↗
                      </Link>
                    )}

                    <DeleteProjectButton
                      projectId={project.id}
                      projectTitle={project.title}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

type TableHeadingProps = {
  children: React.ReactNode;
};

function TableHeading({
  children,
}: TableHeadingProps) {
  return (
    <th className="px-5 py-4 text-xs font-bold uppercase tracking-[0.15em]">
      {children}
    </th>
  );
}