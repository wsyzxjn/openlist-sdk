import type { ApiResponse } from "../../schemas/index.js";

export interface Request {
  paths: string[];
}

export interface Response extends ApiResponse<null> {}
