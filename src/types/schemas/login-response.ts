import type { ApiResponse } from "./api-response.js";

export type LoginResponse = ApiResponse<{
  token?: string;
}>;
