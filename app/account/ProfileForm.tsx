import { updateProfile } from "@/app/account/actions";

export type ProfileFormData = {
  full_name: string;
  country: string | null;
  city: string | null;
  school_or_organization: string | null;
  biography: string | null;
};

type ProfileFormProps = {
  profile: ProfileFormData;
};

export default function ProfileForm({
  profile,
}: ProfileFormProps) {
  return (
    <form
      action={updateProfile}
      className="space-y-6"
    >
      <div>
        <label
          htmlFor="fullName"
          className="block font-bold"
        >
          Full name
        </label>

        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          defaultValue={profile.full_name}
          className="mt-2 w-full border border-[#294638] bg-white px-4 py-4 outline-none focus:ring-2 focus:ring-[#B7CA7F]"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="country"
            className="block font-bold"
          >
            Country
          </label>

          <input
            id="country"
            name="country"
            type="text"
            defaultValue={profile.country ?? ""}
            className="mt-2 w-full border border-[#294638] bg-white px-4 py-4 outline-none focus:ring-2 focus:ring-[#B7CA7F]"
          />
        </div>

        <div>
          <label
            htmlFor="city"
            className="block font-bold"
          >
            City
          </label>

          <input
            id="city"
            name="city"
            type="text"
            defaultValue={profile.city ?? ""}
            className="mt-2 w-full border border-[#294638] bg-white px-4 py-4 outline-none focus:ring-2 focus:ring-[#B7CA7F]"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="schoolOrOrganization"
          className="block font-bold"
        >
          School or organization
        </label>

        <input
          id="schoolOrOrganization"
          name="schoolOrOrganization"
          type="text"
          defaultValue={
            profile.school_or_organization ?? ""
          }
          className="mt-2 w-full border border-[#294638] bg-white px-4 py-4 outline-none focus:ring-2 focus:ring-[#B7CA7F]"
        />
      </div>

      <div>
        <label
          htmlFor="biography"
          className="block font-bold"
        >
          Short biography
        </label>

        <textarea
          id="biography"
          name="biography"
          rows={6}
          maxLength={1000}
          defaultValue={profile.biography ?? ""}
          className="mt-2 w-full resize-y border border-[#294638] bg-white px-4 py-4 outline-none focus:ring-2 focus:ring-[#B7CA7F]"
        />
      </div>

      <button
        type="submit"
        className="bg-[#233F31] px-8 py-4 font-bold text-white transition hover:bg-[#6F8172]"
      >
        Save Profile
      </button>
    </form>
  );
}