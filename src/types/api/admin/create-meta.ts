import type { ApiResponse } from "../../schemas/index.js";

export interface Request {
  path: string;
  password: string;
  readme: string;
  header: string;
  hide: string;
}

export interface Response extends ApiResponse<null> {}
