import type { ApiResponse } from "../../schemas/index.js";

export interface Request {
  path: string;
}

export interface Response
  extends ApiResponse<{
    format?: string;
    encrypted?: boolean;
    total_files?: number;
  }> {}
