import type { ApiResponse } from "../../schemas/index.js";

export interface Request {
  path?: string;
  password?: string;
  force_root?: boolean;
}

export interface Response
  extends ApiResponse<Array<{ name?: string; path?: string }>> {}
