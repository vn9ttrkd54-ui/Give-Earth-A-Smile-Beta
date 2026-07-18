"use client";

import { useState } from "react";
import { deleteProject } from "@/app/admin/projects/actions";

type DeleteProjectButtonProps = {
  projectId: string;
  projectTitle: string;
};

export default function DeleteProjectButton({
  projectId,
  projectTitle,
}: DeleteProjectButtonProps) {
  const [confirming, setConfirming] =
    useState(false);

  if (!confirming) {
    return (
      <button
        type="button"
        onClick={() => setConfirming(true)}
        className="text-sm font-bold text-red-800 underline underline-offset-4"
      >
        Delete
      </button>
    );
  }

  const boundDeleteProject =
    deleteProject.bind(null, projectId);

  return (
    <div className="min-w-[220px] border border-red-800 bg-red-50 p-4">
      <p className="text-sm font-bold text-red-900">
        Delete “{projectTitle}”?
      </p>

      <p className="mt-2 text-xs leading-5 text-red-900/75">
        This action cannot be undone.
      </p>

      <div className="mt-4 flex gap-3">
        <form action={boundDeleteProject}>
          <button
            type="submit"
            className="bg-red-800 px-4 py-2 text-xs font-bold text-white"
          >
            Confirm
          </button>
        </form>

        <button
          type="button"
          onClick={() => setConfirming(false)}
          className="border border-red-800 px-4 py-2 text-xs font-bold text-red-900"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}