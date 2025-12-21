import type { ApiResponse } from "../../schemas/index.js";

export interface Request {
  id: string;
  password?: string;
  expiration?: string;
}

export interface Response extends ApiResponse<null> {}
