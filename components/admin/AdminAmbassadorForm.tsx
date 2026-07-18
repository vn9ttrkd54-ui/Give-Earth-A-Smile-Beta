import type {
  Ambassador,
} from "@/lib/types/ambassadors";

type AdminAmbassadorFormProps = {
  ambassador?: Ambassador;
  action: (
    formData: FormData,
  ) => void | Promise<void>;
};

export default function AdminAmbassadorForm({
  ambassador,
  action,
}: AdminAmbassadorFormProps) {
  return (
    <form
      action={action}
      className="space-y-8"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Field
          label="Name"
          name="name"
          defaultValue={
            ambassador?.name
          }
          required
        />

        <Field
          label="Slug"
          name="slug"
          defaultValue={
            ambassador?.slug
          }
          required
        />

        <Field
          label="Role"
          name="role"
          defaultValue={
            ambassador?.role
          }
        />

        <Field
          label="Country"
          name="country"
          defaultValue={
            ambassador?.country
          }
          required
        />

        <Field
          label="State / Region"
          name="state"
          defaultValue={
            ambassador?.state
          }
        />

        <Field
          label="City"
          name="city"
          defaultValue={
            ambassador?.city
          }
        />

        <Field
          label="Latitude"
          name="latitude"
          type="number"
          step="any"
          defaultValue={
            ambassador?.latitude
          }
        />

        <Field
          label="Longitude"
          name="longitude"
          type="number"
          step="any"
          defaultValue={
            ambassador?.longitude
          }
        />

        <Field
          label="Profile Image URL"
          name="profileImage"
          defaultValue={
            ambassador?.profileImage
          }
        />

        <Field
          label="Email"
          name="email"
          type="email"
        />

        <Field
          label="Joined Date"
          name="joinedDate"
          type="date"
          defaultValue={
            ambassador?.joinedDate
          }
        />

        <Field
          label="Display Order"
          name="displayOrder"
          type="number"
          defaultValue={
            ambassador?.displayOrder ??
            0
          }
        />
      </div>

      <div>
        <label className="block font-bold">
          Bio
        </label>

        <textarea
          name="bio"
          defaultValue={
            ambassador?.bio ?? ""
          }
          rows={6}
          className="admin-input"
        />
      </div>

      <div className="flex flex-wrap gap-8">
        <label className="flex items-center gap-3 font-bold">
          <input
            name="active"
            type="checkbox"
            defaultChecked={
              ambassador?.active ??
              true
            }
          />

          Active
        </label>

        <label className="flex items-center gap-3 font-bold">
          <input
            name="featured"
            type="checkbox"
            defaultChecked={
              ambassador?.featured ??
              false
            }
          />

          Featured
        </label>
      </div>

      <button
        type="submit"
        className="bg-[#233F31] px-8 py-4 font-bold text-white"
      >
        {ambassador
          ? "Save Ambassador"
          : "Create Ambassador"}
      </button>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;

  type?: string;
  step?: string;

  defaultValue?:
    | string
    | number
    | null;

  required?: boolean;
};

function Field({
  label,
  name,
  type = "text",
  step,
  defaultValue,
  required = false,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-bold"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        step={step}
        defaultValue={
          defaultValue ?? ""
        }
        required={required}
        className="admin-input"
      />
    </div>
  );
}