import type { ApiResponse } from "../../schemas/index.js";

export interface Request {
  id: number;
}

export interface Response extends ApiResponse<null> {}
