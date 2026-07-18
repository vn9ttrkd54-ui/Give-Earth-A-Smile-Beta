export type DatabaseIdentifier = string;

export type DatabaseTimestamp = string;

export type Nullable<TValue> =
  | TValue
  | null;

export type EntityStatus =
  | "draft"
  | "published"
  | "archived";

export type LocationInformation = {
  country: string;
  state?: string | null;
  city?: string | null;
  latitude?: number | null;
  longitude?: number | null;
};

export type SeoInformation = {
  metaTitle?: string | null;
  metaDescription?: string | null;
};

export type ImageInformation = {
  url: string;
  alt: string;
};

export type BaseDatabaseEntity = {
  id: DatabaseIdentifier;
  createdAt: DatabaseTimestamp;
  updatedAt: DatabaseTimestamp;
};