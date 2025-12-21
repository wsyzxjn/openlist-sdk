import type { ApiResponse } from "../../schemas/index.js";

export interface Request {
  src_dir: string;
  rename_objects: Array<{ src_name: string; new_name: string }>;
}

export interface Response extends ApiResponse<null> {}
