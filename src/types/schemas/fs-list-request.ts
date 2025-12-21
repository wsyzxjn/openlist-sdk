export interface FsListRequest {
  /** Path to list */
  path?: string;
  /** Password for protected paths */
  password?: string;
  /** Force refresh cache */
  refresh?: boolean;
  page?: number;
  per_page?: number;
}
