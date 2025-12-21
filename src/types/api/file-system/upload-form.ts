import type { ApiResponse } from "../../schemas/index.js";

export interface Request {
  path: string;
  "As-Task"?: string;
}

export interface Response extends ApiResponse<null> {}
