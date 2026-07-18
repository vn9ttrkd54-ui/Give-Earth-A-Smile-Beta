import AdminAmbassadorForm from "@/components/admin/AdminAmbassadorForm";
import {
  createAmbassador,
} from "../actions";

export default function NewAmbassadorPage() {
  return (
    <div className="max-w-5xl">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6F8172]">
        Administration
      </p>

      <h1 className="mt-3 text-5xl">
        Add Ambassador
      </h1>

      <div className="mt-10 border border-[#294638] bg-[#FFFAF0] p-8">
        <AdminAmbassadorForm
          action={
            createAmbassador
          }
        />
      </div>
    </div>
  );
}