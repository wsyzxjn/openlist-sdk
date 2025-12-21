import type { ApiResponse } from "../../schemas/index.js";

export interface Request {
  path: string;
  method?: string;
}

export interface Response extends ApiResponse<null> {}
