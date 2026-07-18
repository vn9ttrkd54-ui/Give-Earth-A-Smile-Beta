import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { createClient } from "@/lib/supabase/server";

export default async function AdminPage() {
  const supabase = await createClient();

  const [
    projectsResult,
    profilesResult,
    publishedProjectsResult,
  ] = await Promise.all([
    supabase
      .from("projects")
      .select("*", {
        count: "exact",
        head: true,
      }),

    supabase
      .from("profiles")
      .select("*", {
        count: "exact",
        head: true,
      }),

    supabase
      .from("projects")
      .select("*", {
        count: "exact",
        head: true,
      })
      .eq("status", "published"),
  ]);

  const totalProjects =
    projectsResult.count ?? 0;

  const totalMembers =
    profilesResult.count ?? 0;

  const publishedProjects =
    publishedProjectsResult.count ?? 0;

  const draftProjects =
    Math.max(
      totalProjects - publishedProjects,
      0,
    );

  const dashboardStatistics = [
    {
      label: "Total Projects",
      value: totalProjects,
    },
    {
      label: "Published Projects",
      value: publishedProjects,
    },
    {
      label: "Unpublished Projects",
      value: draftProjects,
    },
    {
      label: "Registered Accounts",
      value: totalMembers,
    },
  ];

  return (
    <main className="px-6 py-14 md:py-20">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6F8172]">
                Dashboard Overview
              </p>

              <h1 className="mt-4 text-5xl md:text-6xl">
                Administration
              </h1>

              <p className="mt-5 max-w-2xl leading-7 text-[#233F31]/70">
                Manage the organization’s website,
                projects, members, and future volunteer
                programs.
              </p>
            </div>

            <Link
              href="/admin/projects/new"
              className="bg-[#233F31] px-7 py-4 text-center font-bold text-white transition hover:-translate-y-1 hover:bg-[#6F8172]"
            >
              Create New Project
            </Link>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {dashboardStatistics.map(
            (statistic, index) => (
              <FadeIn
                key={statistic.label}
                delay={index * 70}
              >
                <article className="border border-[#294638] bg-[#FFFAF0] p-7 shadow-sm">
                  <p className="font-[var(--font-heading)] text-5xl">
                    {statistic.value}
                  </p>

                  <p className="mt-3 font-bold">
                    {statistic.label}
                  </p>
                </article>
              </FadeIn>
            ),
          )}
        </div>

        <section className="mt-14">
          <FadeIn>
            <h2 className="text-4xl">
              Management Sections
            </h2>
          </FadeIn>

          <div className="mt-8 grid gap-7 md:grid-cols-2">
            <FadeIn>
              <Link
                href="/admin/projects"
                className="group block h-full border border-[#294638] bg-[#FFFAF0] p-8 transition hover:-translate-y-2 hover:shadow-xl"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6F8172]">
                  Available Now
                </p>

                <h3 className="mt-4 text-4xl">
                  Projects
                </h3>

                <p className="mt-5 leading-7 text-[#233F31]/70">
                  Create, edit, publish, feature, archive,
                  and delete organizational projects.
                </p>

                <p className="mt-8 font-bold">
                  Manage Projects{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-2">
                    →
                  </span>
                </p>
              </Link>
            </FadeIn>

            <FadeIn delay={80}>
              <article className="h-full border border-[#294638]/40 bg-[#FFFAF0]/60 p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6F8172]">
                  Next Admin Pack
                </p>

                <h3 className="mt-4 text-4xl">
                  Ambassadors
                </h3>

                <p className="mt-5 leading-7 text-[#233F31]/60">
                  Manage ambassador profiles, countries,
                  regions, photographs, and active status.
                </p>

                <p className="mt-8 font-bold text-[#233F31]/40">
                  Coming Next
                </p>
              </article>
            </FadeIn>

            <FadeIn delay={160}>
              <article className="h-full border border-[#294638]/40 bg-[#FFFAF0]/60 p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6F8172]">
                  Future Pack
                </p>

                <h3 className="mt-4 text-4xl">
                  Education
                </h3>

                <p className="mt-5 leading-7 text-[#233F31]/60">
                  Publish educational articles and
                  community outreach guides.
                </p>
              </article>
            </FadeIn>

            <FadeIn delay={240}>
              <article className="h-full border border-[#294638]/40 bg-[#FFFAF0]/60 p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6F8172]">
                  Future Pack
                </p>

                <h3 className="mt-4 text-4xl">
                  Volunteers
                </h3>

                <p className="mt-5 leading-7 text-[#233F31]/60">
                  Review applications, create
                  opportunities, and approve volunteer
                  hours.
                </p>
              </article>
            </FadeIn>
          </div>
        </section>
      </div>
    </main>
  );
}