import { notFound } from "next/navigation";
import AdminProjectForm from "@/components/admin/AdminProjectForm";
import { updateProject } from "@/app/admin/projects/actions";
import { createClient } from "@/lib/supabase/server";
import {
  projectToFormValues,
  type DatabaseProject,
} from "@/lib/types/databaseProject";

type EditAdminProjectPageProps = {
  params: Promise<{
    id: string;
  }>;

  searchParams: Promise<{
    success?: string;
  }>;
};

export default async function EditAdminProjectPage({
  params,
  searchParams,
}: EditAdminProjectPageProps) {
  const { id } = await params;
  const { success } = await searchParams;

  const supabase = await createClient();

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    notFound();
  }

  const project = data as DatabaseProject;

  const updateAction =
    updateProject.bind(null, project.id);

  return (
    <main className="px-6 py-14 md:py-20">
      <div className="mx-auto max-w-5xl">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6F8172]">
            Project Management
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl">
            Edit Project
          </h1>

          <p className="mt-5 max-w-2xl leading-7 text-[#233F31]/65">
            Update the project’s content, visibility,
            location, dates, and measured impact.
          </p>
        </div>

        {success && (
          <div
            role="status"
            className="mt-8 border border-[#294638] bg-[#FFFAF0] px-5 py-4 font-semibold"
          >
            {success}
          </div>
        )}

        <div className="mt-12">
          <AdminProjectForm
            mode="edit"
            initialValues={projectToFormValues(
              project,
            )}
            action={updateAction}
          />
        </div>
      </div>
    </main>
  );
}