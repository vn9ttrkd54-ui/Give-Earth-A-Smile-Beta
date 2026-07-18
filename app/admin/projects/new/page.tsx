import AdminProjectForm from "@/components/admin/AdminProjectForm";
import { createProject } from "@/app/admin/projects/actions";

export default function NewAdminProjectPage() {
  return (
    <main className="px-6 py-14 md:py-20">
      <div className="mx-auto max-w-5xl">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6F8172]">
            Project Management
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl">
            Create Project
          </h1>

          <p className="mt-5 max-w-2xl leading-7 text-[#233F31]/65">
            Add a new environmental or humanitarian
            project. Save it as a draft until the
            information is ready for publication.
          </p>
        </div>

        <div className="mt-12">
          <AdminProjectForm
            mode="create"
            action={createProject}
          />
        </div>
      </div>
    </main>
  );
}