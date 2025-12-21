import type { ApiResponse } from "./api-response.js";
import type { Share } from "./share.js";

export type SharesListResponse = ApiResponse<{
  content?: Share[];
  total?: number;
}>;
