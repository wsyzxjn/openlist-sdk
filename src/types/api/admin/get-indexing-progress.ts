import type { ApiResponse } from "../../schemas/index.js";

export interface Request {}

export interface Response extends ApiResponse<{
  total: number;
  current: number;
  status: string;
}> {}
