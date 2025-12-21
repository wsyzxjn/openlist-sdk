export interface FsGetRequest {
  /** File or directory path */
  path: string;
  /** Password for protected paths */
  password?: string;
}
