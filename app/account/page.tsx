import Link from "next/link";
import { redirect } from "next/navigation";
import FadeIn from "@/components/FadeIn";
import SignOutButton from "@/components/auth/SignOutButton";
import ProfileForm, {
  ProfileFormData,
} from "@/app/account/ProfileForm";
import { createClient } from "@/lib/supabase/server";

type AccountPageProps = {
  searchParams: Promise<{
    error?: string;
    success?: string;
  }>;
};

type Profile = ProfileFormData & {
  id: string;
  email: string | null;
  role: "member" | "admin";
  created_at: string;
};

export default async function AccountPage({
  searchParams,
}: AccountPageProps) {
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

  const { data, error: profileError } =
    await supabase
      .from("profiles")
      .select(
        `
          id,
          email,
          full_name,
          role,
          country,
          city,
          school_or_organization,
          biography,
          created_at
        `,
      )
      .eq("id", userId)
      .single();

  if (profileError || !data) {
    throw new Error(
      "Your profile could not be loaded.",
    );
  }

  const profile = data as Profile;
  const { error, success } =
    await searchParams;

  return (
    <main className="bg-[#F1F6C8] px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="flex flex-col justify-between gap-6 border border-[#294638] bg-[#233F31] p-8 text-white md:flex-row md:items-center md:p-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B7CA7F]">
                Member Account
              </p>

              <h1 className="mt-4 text-5xl text-white">
                Welcome, {profile.full_name}
              </h1>

              <p className="mt-4 text-white/75">
                {profile.email}
              </p>
            </div>

            <SignOutButton />
          </div>
        </FadeIn>

        <div className="mt-8 grid gap-8 lg:grid-cols-[300px_minmax(0,1fr)]">
          <FadeIn direction="right">
            <aside className="border border-[#294638] bg-[#FFFAF0] p-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6F8172]">
                Account Information
              </p>

              <dl className="mt-7 space-y-6">
                <div>
                  <dt className="text-sm font-bold">
                    Role
                  </dt>

                  <dd className="mt-2">
                    <span className="inline-block bg-[#B7CA7F] px-3 py-2 text-xs font-bold uppercase tracking-[0.15em]">
                      {profile.role}
                    </span>
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-bold">
                    Member since
                  </dt>

                  <dd className="mt-2 text-[#233F31]/70">
                    {new Intl.DateTimeFormat(
                      "en-US",
                      {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      },
                    ).format(
                      new Date(profile.created_at),
                    )}
                  </dd>
                </div>
              </dl>

              {profile.role === "admin" && (
                <Link
                  href="/admin"
                  className="mt-8 block bg-[#233F31] px-5 py-4 text-center font-bold text-white"
                >
                  Open Admin Dashboard
                </Link>
              )}
            </aside>
          </FadeIn>

          <FadeIn direction="left">
            <section className="border border-[#294638] bg-[#FFFAF0] p-7 shadow-sm sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6F8172]">
                Personal Profile
              </p>

              <h2 className="mt-4 text-4xl">
                Update Your Information
              </h2>

              {error && (
                <div
                  role="alert"
                  className="mt-7 border border-red-800 bg-red-50 px-5 py-4 text-red-900"
                >
                  {error}
                </div>
              )}

              {success && (
                <div
                  role="status"
                  className="mt-7 border border-[#294638] bg-[#F1F6C8] px-5 py-4 font-semibold"
                >
                  {success}
                </div>
              )}

              <div className="mt-8">
                <ProfileForm profile={profile} />
              </div>
            </section>
          </FadeIn>
        </div>
      </div>
    </main>
  );
}