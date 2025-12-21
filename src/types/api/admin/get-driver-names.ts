import type { ApiResponse } from "../../schemas/index.js";

export interface Request {}

export interface Response extends ApiResponse<string[]> {}
