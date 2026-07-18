"use client";

import {
  useActionState,
  useEffect,
  useState,
} from "react";
import Link from "next/link";
import type {
  DatabaseProjectFormValues,
} from "@/lib/types/databaseProject";

type ProjectActionState = {
  success: boolean;
  message: string;
};

type AdminProjectFormProps = {
  mode: "create" | "edit";

  initialValues?: DatabaseProjectFormValues;

  action: (
    previousState: ProjectActionState,
    formData: FormData,
  ) => Promise<ProjectActionState>;
};

const emptyValues: DatabaseProjectFormValues = {
  slug: "",
  title: "",
  subtitle: "",
  shortDescription: "",
  fullDescription: "",

  category: "",
  country: "",
  city: "",

  status: "draft",
  featured: false,

  coverImage: "",
  startDate: "",
  endDate: "",

  impactSummary: "",
  peopleReached: 0,
  volunteerHours: 0,
  volunteersCount: 0,

  goals: "",
  results: "",
};

const initialActionState: ProjectActionState = {
  success: false,
  message: "",
};

function createSlug(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

export default function AdminProjectForm({
  mode,
  initialValues = emptyValues,
  action,
}: AdminProjectFormProps) {
  const [state, formAction, pending] =
    useActionState(
      action,
      initialActionState,
    );

  const [title, setTitle] = useState(
    initialValues.title,
  );

  const [slug, setSlug] = useState(
    initialValues.slug,
  );

  const [slugWasEdited, setSlugWasEdited] =
    useState(mode === "edit");

  useEffect(() => {
    if (!slugWasEdited) {
      setSlug(createSlug(title));
    }
  }, [title, slugWasEdited]);

  return (
    <form
      action={formAction}
      className="space-y-10"
    >
      {state.message && (
        <div
          role={state.success ? "status" : "alert"}
          className={`border px-5 py-4 font-semibold ${
            state.success
              ? "border-[#294638] bg-[#F1F6C8]"
              : "border-red-800 bg-red-50 text-red-900"
          }`}
        >
          {state.message}
        </div>
      )}

      <FormSection
        title="Basic Information"
        description="The title, address, and summary used to identify the project."
      >
        <div>
          <label
            htmlFor="title"
            className="block font-bold"
          >
            Project title *
          </label>

          <input
            id="title"
            name="title"
            required
            value={title}
            onChange={(event) =>
              setTitle(event.target.value)
            }
            className="admin-input"
            placeholder="Taiwan Coastal Cleanup"
          />
        </div>

        <div>
          <label
            htmlFor="slug"
            className="block font-bold"
          >
            URL slug *
          </label>

          <input
            id="slug"
            name="slug"
            required
            value={slug}
            onChange={(event) => {
              setSlugWasEdited(true);
              setSlug(
                createSlug(event.target.value),
              );
            }}
            className="admin-input"
            placeholder="taiwan-coastal-cleanup"
          />

          <p className="mt-2 text-sm text-[#233F31]/60">
            Public address: /projects/
            {slug || "project-slug"}
          </p>
        </div>

        <div>
          <label
            htmlFor="subtitle"
            className="block font-bold"
          >
            Subtitle
          </label>

          <input
            id="subtitle"
            name="subtitle"
            defaultValue={initialValues.subtitle}
            className="admin-input"
            placeholder="Restoring coastal spaces through youth service"
          />
        </div>

        <div>
          <label
            htmlFor="shortDescription"
            className="block font-bold"
          >
            Short description *
          </label>

          <textarea
            id="shortDescription"
            name="shortDescription"
            required
            rows={4}
            maxLength={500}
            defaultValue={
              initialValues.shortDescription
            }
            className="admin-input resize-y"
            placeholder="A short summary used on project cards."
          />
        </div>

        <div>
          <label
            htmlFor="fullDescription"
            className="block font-bold"
          >
            Full description
          </label>

          <textarea
            id="fullDescription"
            name="fullDescription"
            rows={9}
            defaultValue={
              initialValues.fullDescription
            }
            className="admin-input resize-y"
            placeholder="Describe the project, its purpose, and how it was organized."
          />
        </div>
      </FormSection>

      <FormSection
        title="Location and Category"
        description="Information used for project filtering and the global impact map."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="category"
              className="block font-bold"
            >
              Category *
            </label>

            <select
              id="category"
              name="category"
              required
              defaultValue={
                initialValues.category
              }
              className="admin-input"
            >
              <option value="">
                Select category
              </option>

              <option value="Environmental Cleanup">
                Environmental Cleanup
              </option>

              <option value="Education">
                Education
              </option>

              <option value="Conservation">
                Conservation
              </option>

              <option value="Humanitarian Service">
                Humanitarian Service
              </option>

              <option value="Community Development">
                Community Development
              </option>

              <option value="Sustainability">
                Sustainability
              </option>

              <option value="Other">
                Other
              </option>
            </select>
          </div>

          <div>
            <label
              htmlFor="country"
              className="block font-bold"
            >
              Country *
            </label>

            <input
              id="country"
              name="country"
              required
              defaultValue={
                initialValues.country
              }
              className="admin-input"
              placeholder="Taiwan"
            />
          </div>

          <div>
            <label
              htmlFor="city"
              className="block font-bold"
            >
              City or region
            </label>

            <input
              id="city"
              name="city"
              defaultValue={initialValues.city}
              className="admin-input"
              placeholder="Taipei"
            />
          </div>
        </div>
      </FormSection>

      <FormSection
        title="Publishing"
        description="Control whether the project is public and whether it appears in featured sections."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="status"
              className="block font-bold"
            >
              Project status
            </label>

            <select
              id="status"
              name="status"
              defaultValue={
                initialValues.status
              }
              className="admin-input"
            >
              <option value="draft">
                Draft — administrators only
              </option>

              <option value="published">
                Published — visible publicly
              </option>

              <option value="archived">
                Archived — hidden publicly
              </option>
            </select>
          </div>

          <label className="flex cursor-pointer items-start gap-4 border border-[#294638] bg-white p-5 md:mt-7">
            <input
              type="checkbox"
              name="featured"
              defaultChecked={
                initialValues.featured
              }
              className="mt-1 h-5 w-5 accent-[#233F31]"
            />

            <span>
              <span className="block font-bold">
                Featured project
              </span>

              <span className="mt-1 block text-sm leading-6 text-[#233F31]/60">
                Feature this project on highlighted
                website sections.
              </span>
            </span>
          </label>
        </div>

        <div>
          <label
            htmlFor="coverImage"
            className="block font-bold"
          >
            Cover image path
          </label>

          <input
            id="coverImage"
            name="coverImage"
            defaultValue={
              initialValues.coverImage
            }
            className="admin-input"
            placeholder="/images/projects/example.jpg"
          />

          <p className="mt-2 text-sm text-[#233F31]/60">
            File upload will be added later. For now,
            enter an image path from the public folder.
          </p>
        </div>
      </FormSection>

      <FormSection
        title="Project Dates"
        description="The start and ending dates of the project."
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="startDate"
              className="block font-bold"
            >
              Start date
            </label>

            <input
              id="startDate"
              name="startDate"
              type="date"
              defaultValue={
                initialValues.startDate
              }
              className="admin-input"
            />
          </div>

          <div>
            <label
              htmlFor="endDate"
              className="block font-bold"
            >
              End date
            </label>

            <input
              id="endDate"
              name="endDate"
              type="date"
              defaultValue={
                initialValues.endDate
              }
              className="admin-input"
            />
          </div>
        </div>
      </FormSection>

      <FormSection
        title="Measured Impact"
        description="Statistics and a summary describing the project's results."
      >
        <div>
          <label
            htmlFor="impactSummary"
            className="block font-bold"
          >
            Impact summary
          </label>

          <textarea
            id="impactSummary"
            name="impactSummary"
            rows={4}
            defaultValue={
              initialValues.impactSummary
            }
            className="admin-input resize-y"
            placeholder="Summarize the project's measurable impact."
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <NumberField
            id="peopleReached"
            label="People reached"
            defaultValue={
              initialValues.peopleReached
            }
          />

          <NumberField
            id="volunteerHours"
            label="Volunteer hours"
            defaultValue={
              initialValues.volunteerHours
            }
          />

          <NumberField
            id="volunteersCount"
            label="Number of volunteers"
            defaultValue={
              initialValues.volunteersCount
            }
          />
        </div>
      </FormSection>

      <FormSection
        title="Goals and Results"
        description="Enter one item per line. Empty lines will be removed automatically."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <label
              htmlFor="goals"
              className="block font-bold"
            >
              Project goals
            </label>

            <textarea
              id="goals"
              name="goals"
              rows={8}
              defaultValue={initialValues.goals}
              className="admin-input resize-y"
              placeholder={`Remove litter from the coastline\nEducate local students\nRecruit new volunteers`}
            />
          </div>

          <div>
            <label
              htmlFor="results"
              className="block font-bold"
            >
              Project results
            </label>

            <textarea
              id="results"
              name="results"
              rows={8}
              defaultValue={initialValues.results}
              className="admin-input resize-y"
              placeholder={`Collected 300 pounds of waste\nReached 150 students\nRecruited 25 volunteers`}
            />
          </div>
        </div>
      </FormSection>

      <div className="sticky bottom-0 z-20 flex flex-col justify-between gap-4 border border-[#294638] bg-[#FFFAF0]/95 p-5 shadow-2xl backdrop-blur-md sm:flex-row sm:items-center">
        <Link
          href="/admin/projects"
          className="px-6 py-3 text-center font-bold underline underline-offset-4"
        >
          Cancel
        </Link>

        <button
          type="submit"
          disabled={pending}
          className="bg-[#233F31] px-8 py-4 font-bold text-white transition hover:bg-[#6F8172] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {pending
            ? "Saving..."
            : mode === "create"
              ? "Create Project"
              : "Save Changes"}
        </button>
      </div>
    </form>
  );
}

type FormSectionProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

function FormSection({
  title,
  description,
  children,
}: FormSectionProps) {
  return (
    <section className="border border-[#294638] bg-[#FFFAF0] p-6 shadow-sm sm:p-8">
      <div className="border-b border-[#294638]/20 pb-6">
        <h2 className="text-3xl">{title}</h2>

        <p className="mt-3 leading-7 text-[#233F31]/65">
          {description}
        </p>
      </div>

      <div className="mt-7 space-y-6">
        {children}
      </div>
    </section>
  );
}

type NumberFieldProps = {
  id: string;
  label: string;
  defaultValue: number;
};

function NumberField({
  id,
  label,
  defaultValue,
}: NumberFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-bold"
      >
        {label}
      </label>

      <input
        id={id}
        name={id}
        type="number"
        min={0}
        step={1}
        defaultValue={defaultValue}
        className="admin-input"
      />
    </div>
  );
}