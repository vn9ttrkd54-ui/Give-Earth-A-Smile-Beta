import type { ReactNode } from "react";
import Link from "next/link";
import AdminNavigation from "@/components/admin/AdminNavigation";
import SignOutButton from "@/components/auth/SignOutButton";
import { requireAdmin } from "@/lib/admin/requireAdmin";

type AdminLayoutProps = {
  children: ReactNode;
};

export default async function AdminLayout({
  children,
}: AdminLayoutProps) {
  const admin = await requireAdmin();

  return (
    <div className="min-h-screen bg-[#F1F6C8]">
      <header className="bg-[#233F31] px-6 py-6 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <Link
              href="/admin"
              className="font-[var(--font-heading)] text-3xl text-white"
            >
              Give Earth a Smile
            </Link>

            <p className="mt-1 text-sm text-white/65">
              Administration Dashboard
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="hidden text-right sm:block">
              <p className="font-bold">
                {admin.full_name}
              </p>

              <p className="text-sm text-white/65">
                Administrator
              </p>
            </div>

            <Link
              href="/"
              className="border border-white/70 px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#233F31]"
            >
              View Website
            </Link>

            <SignOutButton />
          </div>
        </div>
      </header>

      <AdminNavigation />

      {children}
    </div>
  );
}