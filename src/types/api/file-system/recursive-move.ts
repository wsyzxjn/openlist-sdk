import type { ApiResponse } from "../../schemas/index.js";

export interface Request {
  src_dir: string;
  dst_dir: string;
}

export interface Response extends ApiResponse<null> {}
