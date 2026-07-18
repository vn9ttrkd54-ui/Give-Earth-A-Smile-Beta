import Link from "next/link";
import { redirect } from "next/navigation";
import FadeIn from "@/components/FadeIn";
import SignOutButton from "@/components/auth/SignOutButton";
import { createClient } from "@/lib/supabase/server";

type ProfileRole = {
  role: "member" | "admin";
  full_name: string;
};

export default async function AdminPage() {
  const supabase = await createClient();

  const { data: claimsData } =
    await supabase.auth.getClaims();

  const userId =
    typeof claimsData?.claims?.sub === "string"
      ? claimsData.claims.sub
      : null;

  if (!userId) {
    redirect("/login");
  }

  const { data } = await supabase
    .from("profiles")
    .select("role, full_name")
    .eq("id", userId)
    .single();

  const profile = data as ProfileRole | null;

  if (!profile || profile.role !== "admin") {
    redirect("/account");
  }

  const dashboardItems = [
    {
      title: "Projects",
      description:
        "Create, edit, publish, and archive organizational projects.",
      href: "#",
      status: "Coming in Pack 7",
    },
    {
      title: "Ambassadors",
      description:
        "Review and manage the international ambassador network.",
      href: "#",
      status: "Coming in Pack 7",
    },
    {
      title: "Education",
      description:
        "Publish articles, outreach guides, and learning resources.",
      href: "#",
      status: "Coming in Pack 7",
    },
    {
      title: "Volunteers",
      description:
        "Review applications, opportunities, and volunteer hours.",
      href: "#",
      status: "Coming in Pack 8",
    },
  ];

  return (
    <main>
      <section className="bg-[#233F31] px-6 py-16 text-white md:py-24">
        <FadeIn className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B7CA7F]">
                Protected Administration
              </p>

              <h1 className="mt-5 text-5xl text-white md:text-7xl">
                Admin Dashboard
              </h1>

              <p className="mt-6 text-lg text-white/75">
                Signed in as {profile.full_name}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/account"
                className="border border-white px-6 py-3 font-bold text-white transition hover:bg-white hover:text-[#233F31]"
              >
                My Account
              </Link>

              <SignOutButton />
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="bg-[#F1F6C8] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="border-l-4 border-[#233F31] bg-[#FFFAF0] p-7">
              <p className="font-bold">
                Authentication and role protection are
                active.
              </p>

              <p className="mt-3 leading-7 text-[#233F31]/75">
                The next pack will connect these dashboard
                sections to real Supabase database tables
                and admin forms.
              </p>
            </div>
          </FadeIn>

          <div className="mt-10 grid gap-7 md:grid-cols-2">
            {dashboardItems.map(
              (item, index) => (
                <FadeIn
                  key={item.title}
                  delay={index * 80}
                  className="h-full"
                >
                  <article className="flex h-full flex-col border border-[#294638] bg-[#FFFAF0] p-8 transition hover:-translate-y-2 hover:shadow-xl">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6F8172]">
                      {item.status}
                    </p>

                    <h2 className="mt-4 text-4xl">
                      {item.title}
                    </h2>

                    <p className="mt-5 flex-1 leading-7 text-[#233F31]/75">
                      {item.description}
                    </p>

                    <span className="mt-8 font-bold text-[#233F31]/50">
                      Management tools coming next
                    </span>
                  </article>
                </FadeIn>
              ),
            )}
          </div>
        </div>
      </section>
    </main>
  );
}