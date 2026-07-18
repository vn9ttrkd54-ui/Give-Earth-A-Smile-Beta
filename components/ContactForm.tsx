"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-14">
      <div className="grid gap-8 md:grid-cols-3">
        <label>
          <span className="mb-3 block">First Name</span>
          <input
            required
            type="text"
            className="w-full border border-[#294638] bg-[#FFFAF0] px-4 py-4 outline-none"
          />
        </label>

        <label>
          <span className="mb-3 block">Last Name</span>
          <input
            required
            type="text"
            className="w-full border border-[#294638] bg-[#FFFAF0] px-4 py-4 outline-none"
          />
        </label>

        <label>
          <span className="mb-3 block">Email</span>
          <input
            required
            type="email"
            className="w-full border border-[#294638] bg-[#FFFAF0] px-4 py-4 outline-none"
          />
        </label>
      </div>

      <label className="mt-6 block">
        <span className="mb-3 block">Reason for Contact</span>
        <select className="w-full border border-[#294638] bg-[#FFFAF0] px-4 py-4 outline-none">
          <option>General Question</option>
          <option>Partnership</option>
          <option>Volunteer Opportunity</option>
          <option>Donation</option>
          <option>School Collaboration</option>
          <option>Other</option>
        </select>
      </label>

      <label className="mt-6 block">
        <span className="mb-3 block">Message</span>
        <textarea
          required
          rows={7}
          className="w-full resize-none border border-[#294638] bg-[#FFFAF0] px-4 py-4 outline-none"
        />
      </label>

      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          className="min-w-80 bg-[#6F8172] px-10 py-4 text-white"
        >
          Send
        </button>
      </div>

      {submitted && (
        <p className="mt-6 text-right font-semibold">
          Thank you. This prototype form has been submitted successfully.
        </p>
      )}
    </form>
  );
}