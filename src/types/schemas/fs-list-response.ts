import type { ApiResponse } from "./api-response.js";
import type { FsObject } from "./fs-object.js";

export type FsListResponse = ApiResponse<{
  content?: FsObject[];
  total?: number;
  readme?: string;
  header?: string;
  write?: boolean;
  provider?: string;
}>;
