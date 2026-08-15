"use client";

import { FormEvent, useState } from "react";

export default function JoinForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-[#294638] bg-[#FFFAF0] p-8 md:p-12"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <label>
          <span className="mb-2 block">First Name</span>
          <input
            required
            className="w-full border border-[#294638] px-4 py-3"
          />
        </label>

        <label>
          <span className="mb-2 block">Last Name</span>
          <input
            required
            className="w-full border border-[#294638] px-4 py-3"
          />
        </label>

        <label>
          <span className="mb-2 block">Email</span>
          <input
            required
            type="email"
            className="w-full border border-[#294638] px-4 py-3"
          />
        </label>

        <label>
          <span className="mb-2 block">School</span>
          <input className="w-full border border-[#294638] px-4 py-3" />
        </label>

        <label>
          <span className="mb-2 block">City</span>
          <input
            required
            className="w-full border border-[#294638] px-4 py-3"
          />
        </label>

        <label>
          <span className="mb-2 block">Country</span>
          <input
            required
            className="w-full border border-[#294638] px-4 py-3"
          />
        </label>
      </div>

      <label className="mt-6 block">
        <span className="mb-2 block">
          Why do you want to join Give Earth a Smile?
        </span>
        <textarea
          required
          rows={6}
          className="w-full resize-none border border-[#294638] px-4 py-3"
        />
      </label>

      <label className="mt-6 block">
        <span className="mb-2 block">Availability</span>
        <select className="w-full border border-[#294638] px-4 py-3">
          <option>Weekdays</option>
          <option>Weekends</option>
          <option>Both weekdays and weekends</option>
          <option>Varies</option>
        </select>
      </label>

      <button
        type="submit"
        className="mt-8 w-full bg-[#233F31] px-8 py-4 font-semibold text-white"
      >
        Submit Membership Application
      </button>

      {submitted && (
        <p className="mt-6 text-center font-semibold">
          Thank you for applying. This prototype does not save the application
          yet. Please contact us by email or Instagram if you would like to
          follow up or have any questions about your application.
        </p>
      )}
    </form>
  );
}
