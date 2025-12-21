import type { StorageResponse } from "../../schemas/index.js";

export interface Request {
  id: number;
}

export interface Response extends StorageResponse {}
