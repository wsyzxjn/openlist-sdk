import type { ApiResponse } from "../../schemas/index.js";

export interface Request {
  password?: string;
  old_password?: string;
}

export interface Response extends ApiResponse<null> {}
