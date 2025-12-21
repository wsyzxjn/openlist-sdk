import type { ApiResponse } from "./api-response.js";

export type ShareCreateResponse = ApiResponse<{
  id?: string;
  url?: string;
}>;
