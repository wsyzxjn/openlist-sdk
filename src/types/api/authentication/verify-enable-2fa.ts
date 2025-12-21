import type { ApiResponse } from "../../schemas/index.js";

export interface Request {
  code: string;
}

export interface Response extends ApiResponse<unknown> {}
