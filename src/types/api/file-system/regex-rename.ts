import type { ApiResponse } from "../../schemas/index.js";

export interface Request {
  src_dir: string;
  src_name_regex: string;
  new_name_regex: string;
}

export interface Response extends ApiResponse<null> {}
