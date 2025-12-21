import type { ApiResponse } from "../../schemas/index.js";

export interface Request {
  id: string;
}

export interface Response extends ApiResponse<null> {}
