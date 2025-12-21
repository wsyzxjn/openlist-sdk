import type { ApiResponse } from "./api-response.js";
import type { User } from "./user.js";

export type UsersListResponse = ApiResponse<{
  content?: User[];
  total?: number;
}>;
