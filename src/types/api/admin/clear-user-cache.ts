import type { ApiResponse } from "../../schemas/index.js";

export interface Request {
  username: string;
}

export interface Response extends ApiResponse<null> {}
