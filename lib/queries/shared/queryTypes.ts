export type SortDirection =
  | "ascending"
  | "descending";

export type PaginationInput = {
  page?: number;
  pageSize?: number;
};

export type PaginationMetadata = {
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
};

export type PaginatedResult<TItem> = {
  items: TItem[];
  pagination: PaginationMetadata;
};

export type SelectOption = {
  label: string;
  value: string;
};