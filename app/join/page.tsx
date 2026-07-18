import JoinForm from "@/components/JoinForm";

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-[#F1F6C8] px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.25em]">
            Get Involved
          </p>

          <h1 className="mt-5 text-6xl">Join Give Earth a Smile</h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8">
            Apply to become a member, participate in environmental projects,
            and earn verified volunteer hours through approved opportunities.
          </p>
        </div>

        <div className="mt-14">
          <JoinForm />
        </div>

        <p className="mt-6 text-center text-sm leading-6">
          Volunteer hours will only be recorded after an administrator verifies
          that the service was completed.
        </p>
      </div>
    </main>
  );
}