import Link from "next/link";
import { redirect } from "next/navigation";
import FadeIn from "@/components/FadeIn";
import { signIn } from "@/app/auth/actions";
import { createClient } from "@/lib/supabase/server";

type LoginPageProps = {
  searchParams: Promise<{
    error?: string;
    success?: string;
  }>;
};

export default async function LoginPage({
  searchParams,
}: LoginPageProps) {
  const supabase = await createClient();

  const { data: claimsData } =
    await supabase.auth.getClaims();

  if (claimsData?.claims) {
    redirect("/account");
  }

  const { error, success } =
    await searchParams;

  return (
    <main className="bg-[#F1F6C8] px-6 py-20 md:py-28">
      <FadeIn className="mx-auto max-w-xl">
        <section className="border border-[#294638] bg-[#FFFAF0] p-7 shadow-xl sm:p-10">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#6F8172]">
              Member Portal
            </p>

            <h1 className="mt-4 text-5xl">
              Welcome Back
            </h1>

            <p className="mt-5 leading-7 text-[#233F31]/75">
              Sign in to access your Give Earth a
              Smile account.
            </p>
          </div>

          {error && (
            <div
              role="alert"
              className="mt-7 border border-red-800 bg-red-50 px-5 py-4 text-sm font-semibold text-red-900"
            >
              {error}
            </div>
          )}

          {success && (
            <div
              role="status"
              className="mt-7 border border-[#294638] bg-[#F1F6C8] px-5 py-4 text-sm font-semibold"
            >
              {success}
            </div>
          )}

          <form
            action={signIn}
            className="mt-8 space-y-6"
          >
            <div>
              <label
                htmlFor="email"
                className="block font-bold"
              >
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-2 w-full border border-[#294638] bg-white px-4 py-4 outline-none transition focus:ring-2 focus:ring-[#B7CA7F]"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block font-bold"
              >
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="mt-2 w-full border border-[#294638] bg-white px-4 py-4 outline-none transition focus:ring-2 focus:ring-[#B7CA7F]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#233F31] px-8 py-4 font-bold text-white transition hover:bg-[#6F8172]"
            >
              Sign In
            </button>
          </form>

          <p className="mt-8 text-center">
            Need an account?{" "}
            <Link
              href="/signup"
              className="font-bold underline underline-offset-4"
            >
              Create one
            </Link>
          </p>
        </section>
      </FadeIn>
    </main>
  );
}