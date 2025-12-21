import type { ApiResponse } from "../../schemas/index.js";

export interface Request {
  user_id: number;
}

export interface Response extends ApiResponse<Array<Record<string, unknown>>> {}
