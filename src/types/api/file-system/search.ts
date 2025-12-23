import type { ApiResponse, FsObject } from "../../schemas/index.js";

export interface Request {
  parent: string;
  keywords: string;
  scope?: number;
  page?: number;
  per_page?: number;
}

export interface Response
  extends ApiResponse<{
    content?: FsObject[];
    total?: number;
  }> {}
