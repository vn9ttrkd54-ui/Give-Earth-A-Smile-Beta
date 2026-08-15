"use client";

import { FormEvent, useState } from "react";

type SubmissionState = "idle" | "submitting" | "success" | "error";

export default function JoinForm() {
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmissionState("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/membership-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(
          result.error || "We could not send your application.",
        );
      }

      form.reset();
      setSubmissionState("success");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "We could not send your application.",
      );
      setSubmissionState("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-[#294638] bg-[#FFFAF0] p-8 md:p-12"
    >
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <label>
          <span className="mb-2 block">First Name</span>
          <input required name="firstName" className="w-full border border-[#294638] px-4 py-3" />
        </label>
        <label>
          <span className="mb-2 block">Last Name</span>
          <input required name="lastName" className="w-full border border-[#294638] px-4 py-3" />
        </label>
        <label>
          <span className="mb-2 block">Email</span>
          <input required name="email" type="email" className="w-full border border-[#294638] px-4 py-3" />
        </label>
        <label>
          <span className="mb-2 block">School</span>
          <input name="school" className="w-full border border-[#294638] px-4 py-3" />
        </label>
        <label>
          <span className="mb-2 block">City</span>
          <input required name="city" className="w-full border border-[#294638] px-4 py-3" />
        </label>
        <label>
          <span className="mb-2 block">Country</span>
          <input required name="country" className="w-full border border-[#294638] px-4 py-3" />
        </label>
      </div>

      <label className="mt-6 block">
        <span className="mb-2 block">Why do you want to join Give Earth a Smile?</span>
        <textarea required name="motivation" rows={6} maxLength={5000} className="w-full resize-none border border-[#294638] px-4 py-3" />
      </label>

      <label className="mt-6 block">
        <span className="mb-2 block">Availability</span>
        <select name="availability" className="w-full border border-[#294638] px-4 py-3">
          <option>Weekdays</option>
          <option>Weekends</option>
          <option>Both weekdays and weekends</option>
          <option>Varies</option>
        </select>
      </label>

      <button
        type="submit"
        disabled={submissionState === "submitting"}
        className="mt-8 w-full bg-[#233F31] px-8 py-4 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submissionState === "submitting"
          ? "Sending Application..."
          : "Submit Membership Application"}
      </button>

      {submissionState === "success" && (
        <p className="mt-6 text-center font-semibold" role="status">
          Thank you for applying. Your application has been sent to Give Earth
          a Smile. Please contact us by email or Instagram if you would like to
          follow up or have any questions.
        </p>
      )}

      {submissionState === "error" && (
        <p className="mt-6 text-center font-semibold text-red-700" role="alert">
          {errorMessage} Please email giveearthasmile@gmail.com if the problem
          continues.
        </p>
      )}
    </form>
  );
}
