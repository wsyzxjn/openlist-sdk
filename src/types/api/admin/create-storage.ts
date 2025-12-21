import type { ApiResponse } from "../../schemas/index.js";

export interface Request {
  mount_path: string;
  driver: string;
  order: number;
  cache_expiration: number;
  addition: string;
  remark: string;
}

export interface Response extends ApiResponse<null> {}
