import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { requireAdmin } from "@/lib/admin/requireAdmin";
import {
  deleteAmbassador,
  toggleAmbassadorActive,
} from "./actions";

export default async function AdminAmbassadorsPage() {
  await requireAdmin();

  const supabase =
    await createClient();

  const { data, error } =
    await supabase
      .from("ambassadors")
      .select(`
        id,
        name,
        slug,
        role,
        country,
        city,
        featured,
        active,
        display_order
      `)
      .order(
        "display_order",
        {
          ascending: true,
        },
      )
      .order("name", {
        ascending: true,
      });

  if (error) {
    throw new Error(
      error.message,
    );
  }

  const ambassadors =
    data ?? [];

  return (
    <div>
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6F8172]">
            Administration
          </p>

          <h1 className="mt-3 text-5xl">
            Ambassadors
          </h1>
        </div>

        <Link
          href="/admin/ambassadors/new"
          className="bg-[#233F31] px-6 py-4 font-bold text-white"
        >
          Add Ambassador
        </Link>
      </div>

      <div className="mt-10 overflow-x-auto border border-[#294638]">
        <table className="w-full min-w-[900px]">
          <thead className="bg-[#233F31] text-left text-white">
            <tr>
              <th className="p-4">
                Name
              </th>

              <th className="p-4">
                Role
              </th>

              <th className="p-4">
                Location
              </th>

              <th className="p-4">
                Featured
              </th>

              <th className="p-4">
                Status
              </th>

              <th className="p-4">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {ambassadors.map(
              (ambassador) => (
                <tr
                  key={
                    ambassador.id
                  }
                  className="border-t border-[#294638]/20"
                >
                  <td className="p-4 font-bold">
                    {
                      ambassador.name
                    }
                  </td>

                  <td className="p-4">
                    {ambassador.role ||
                      "—"}
                  </td>

                  <td className="p-4">
                    {[
                      ambassador.city,
                      ambassador.country,
                    ]
                      .filter(Boolean)
                      .join(", ")}
                  </td>

                  <td className="p-4">
                    {ambassador.featured
                      ? "Yes"
                      : "No"}
                  </td>

                  <td className="p-4">
                    {ambassador.active
                      ? "Active"
                      : "Inactive"}
                  </td>

                  <td className="p-4">
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={`/admin/ambassadors/${ambassador.id}/edit`}
                        className="font-bold underline"
                      >
                        Edit
                      </Link>

                      <form
                        action={async () => {
                          "use server";

                          await toggleAmbassadorActive(
                            ambassador.id,
                            !ambassador.active,
                          );
                        }}
                      >
                        <button
                          type="submit"
                          className="font-bold underline"
                        >
                          {ambassador.active
                            ? "Deactivate"
                            : "Activate"}
                        </button>
                      </form>

                      <form
                        action={async () => {
                          "use server";

                          await deleteAmbassador(
                            ambassador.id,
                          );
                        }}
                      >
                        <button
                          type="submit"
                          className="font-bold text-red-700 underline"
                        >
                          Delete
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}