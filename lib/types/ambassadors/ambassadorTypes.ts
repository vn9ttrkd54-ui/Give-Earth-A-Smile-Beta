import type {
  BaseDatabaseEntity,
} from "@/lib/types/shared/commonTypes";

export type Ambassador =
  BaseDatabaseEntity & {
    name: string;
    slug: string;

    role: string | null;
    bio: string | null;

    country: string;
    state: string | null;
    city: string | null;

    latitude: number | null;
    longitude: number | null;

    profileImage: string | null;

    featured: boolean;
    active: boolean;

    joinedDate: string | null;

    displayOrder: number;
  };

export type AmbassadorDatabaseRow = {
  id: string;

  name: string;
  slug: string;

  role: string | null;
  bio: string | null;

  country: string;
  state: string | null;
  city: string | null;

  latitude: number | null;
  longitude: number | null;

  profile_image: string | null;

  featured: boolean;
  active: boolean;

  joined_date: string | null;

  display_order: number;

  created_at: string;
  updated_at: string;
};

export type AmbassadorStatistics = {
  totalAmbassadors: number;
  totalCountries: number;
  totalCities: number;
};

export type AmbassadorFilterOptions = {
  countries: string[];
  roles: string[];
};

export function convertAmbassadorRow(
  row: AmbassadorDatabaseRow,
): Ambassador {
  return {
    id: row.id,

    name: row.name,
    slug: row.slug,

    role: row.role,
    bio: row.bio,

    country: row.country,
    state: row.state,
    city: row.city,

    latitude: row.latitude,
    longitude: row.longitude,

    profileImage:
      row.profile_image,

    featured: row.featured,
    active: row.active,

    joinedDate:
      row.joined_date,

    displayOrder:
      row.display_order ?? 0,

    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}