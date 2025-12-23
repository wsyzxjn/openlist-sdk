import type { ApiResponse } from "../../schemas/index.js";

export interface Request {}

export interface Response
  extends ApiResponse<Array<{ id?: string; created_at?: string }>> {}
