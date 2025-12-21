import type { ApiResponse } from "../../schemas/index.js";

export interface Request {
  name: string;
  public_key: string;
}

export interface Response extends ApiResponse<null> {}
