import type { ApiResponse } from "../../schemas/index.js";

export interface Request {
  path: string;
  "As-Task"?: string;
  "Last-Modified"?: string;
}

export interface Response extends ApiResponse<null> {}
