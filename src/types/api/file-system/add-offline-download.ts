import type { ApiResponse } from "../../schemas/index.js";

export interface Request {
  path: string;
  urls: string[];
  tool?: string;
}

export interface Response extends ApiResponse<null> {}
