import Link from "next/link";
import AdminProjectTable from "@/components/admin/AdminProjectTable";
import { createClient } from "@/lib/supabase/server";
import type {
  DatabaseProject,
  ProjectStatus,
} from "@/lib/types/databaseProject";

type AdminProjectsPageProps = {
  searchParams: Promise<{
    search?: string;
    status?: string;
    success?: string;
    error?: string;
  }>;
};

function getStatusFilter(
  value: string | undefined,
): ProjectStatus | "all" {
  if (
    value === "draft" ||
    value === "published" ||
    value === "archived"
  ) {
    return value;
  }

  return "all";
}

export default async function AdminProjectsPage({
  searchParams,
}: AdminProjectsPageProps) {
  const parameters = await searchParams;

  const search =
    parameters.search?.trim() ?? "";

  const status = getStatusFilter(
    parameters.status,
  );

  const supabase = await createClient();

  let query = supabase
    .from("projects")
    .select("*")
    .order("updated_at", {
      ascending: false,
    });

  if (status !== "all") {
    query = query.eq("status", status);
  }

  if (search) {
    const safeSearch = search
      .replace(/[%_,()]/g, " ")
      .trim();

    if (safeSearch) {
      query = query.or(
        `title.ilike.%${safeSearch}%,country.ilike.%${safeSearch}%,city.ilike.%${safeSearch}%,category.ilike.%${safeSearch}%`,
      );
    }
  }

  const { data, error } = await query;

  const projects =
    (data as DatabaseProject[] | null) ?? [];

  return (
    <main className="px-6 py-14 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6F8172]">
              Website Content
            </p>

            <h1 className="mt-4 text-5xl md:text-6xl">
              Projects
            </h1>

            <p className="mt-5 max-w-2xl leading-7 text-[#233F31]/65">
              Create and manage environmental and
              humanitarian projects from one dashboard.
            </p>
          </div>

          <Link
            href="/admin/projects/new"
            className="bg-[#233F31] px-7 py-4 text-center font-bold text-white transition hover:-translate-y-1 hover:bg-[#6F8172]"
          >
            Create Project
          </Link>
        </div>

        {(parameters.success ||
          parameters.error ||
          error) && (
          <div
            role={
              parameters.error || error
                ? "alert"
                : "status"
            }
            className={`mt-8 border px-5 py-4 font-semibold ${
              parameters.error || error
                ? "border-red-800 bg-red-50 text-red-900"
                : "border-[#294638] bg-[#FFFAF0]"
            }`}
          >
            {parameters.success ||
              parameters.error ||
              error?.message}
          </div>
        )}

        <form className="mt-10 border border-[#294638] bg-[#FFFAF0] p-5">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_230px_auto]">
            <div>
              <label
                htmlFor="search"
                className="block text-sm font-bold"
              >
                Search projects
              </label>

              <input
                id="search"
                name="search"
                type="search"
                defaultValue={search}
                placeholder="Search title, country, city, or category..."
                className="admin-input"
              />
            </div>

            <div>
              <label
                htmlFor="status"
                className="block text-sm font-bold"
              >
                Status
              </label>

              <select
                id="status"
                name="status"
                defaultValue={status}
                className="admin-input"
              >
                <option value="all">
                  All statuses
                </option>

                <option value="draft">
                  Draft
                </option>

                <option value="published">
                  Published
                </option>

                <option value="archived">
                  Archived
                </option>
              </select>
            </div>

            <div className="flex items-end gap-3">
              <button
                type="submit"
                className="bg-[#233F31] px-6 py-4 font-bold text-white"
              >
                Apply
              </button>

              <Link
                href="/admin/projects"
                className="border border-[#294638] px-6 py-4 font-bold"
              >
                Reset
              </Link>
            </div>
          </div>

          <p className="mt-5 border-t border-[#294638]/20 pt-5 font-bold">
            {projects.length}{" "}
            {projects.length === 1
              ? "project"
              : "projects"}{" "}
            found
          </p>
        </form>

        <div className="mt-8">
          <AdminProjectTable
            projects={projects}
          />
        </div>
      </div>
    </main>
  );
}