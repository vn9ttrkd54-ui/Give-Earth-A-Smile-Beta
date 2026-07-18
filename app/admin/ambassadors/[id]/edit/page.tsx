import {
  notFound,
} from "next/navigation";
import AdminAmbassadorForm from "@/components/admin/AdminAmbassadorForm";
import { createClient } from "@/lib/supabase/server";
import {
  convertAmbassadorRow,
  type AmbassadorDatabaseRow,
} from "@/lib/types/ambassadors";
import {
  updateAmbassador,
} from "../../../actions";

type EditAmbassadorPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditAmbassadorPage({
  params,
}: EditAmbassadorPageProps) {
  const { id } =
    await params;

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
        bio,
        country,
        state,
        city,
        latitude,
        longitude,
        profile_image,
        featured,
        active,
        joined_date,
        display_order,
        created_at,
        updated_at
      `)
      .eq("id", id)
      .maybeSingle();

  if (
    error ||
    !data
  ) {
    notFound();
  }

  const ambassador =
    convertAmbassadorRow(
      data as AmbassadorDatabaseRow,
    );

  const action =
    updateAmbassador.bind(
      null,
      ambassador.id,
    );

  return (
    <div className="max-w-5xl">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6F8172]">
        Administration
      </p>

      <h1 className="mt-3 text-5xl">
        Edit Ambassador
      </h1>

      <div className="mt-10 border border-[#294638] bg-[#FFFAF0] p-8">
        <AdminAmbassadorForm
          ambassador={
            ambassador
          }
          action={action}
        />
      </div>
    </div>
  );
}