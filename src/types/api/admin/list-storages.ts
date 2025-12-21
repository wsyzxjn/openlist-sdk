import type { StoragesListResponse } from "../../schemas/index.js";

export interface Request {
  page?: number;
  per_page?: number;
}

export interface Response extends StoragesListResponse {}
