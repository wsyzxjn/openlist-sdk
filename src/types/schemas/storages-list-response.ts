import type { ApiResponse } from "./api-response.js";
import type { Storage } from "./storage.js";

export type StoragesListResponse = ApiResponse<{
  content?: Storage[];
  total?: number;
}>;
