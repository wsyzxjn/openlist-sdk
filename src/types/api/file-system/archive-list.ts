import type { ApiResponse, FsObject } from "../../schemas/index.js";

export interface Request {
  path: string;
  archive_path?: string;
}

export interface Response extends ApiResponse<{
  content?: FsObject[];
  total?: number;
}> {}
