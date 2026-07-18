import { signOut } from "@/app/auth/actions";

export default function SignOutButton() {
  return (
    <form action={signOut}>
      <button
        type="submit"
        className="border border-[#294638] px-6 py-3 font-bold transition hover:bg-[#233F31] hover:text-white"
      >
        Sign Out
      </button>
    </form>
  );
}