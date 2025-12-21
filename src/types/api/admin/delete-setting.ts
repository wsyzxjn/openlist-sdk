import type { ApiResponse } from "../../schemas/index.js";

export interface Request {
  key: string;
}

export interface Response extends ApiResponse<null> {}
