import type { ApiResponse } from "../../schemas/index.js";

export interface Request extends Array<{ key: string; value: string }> {}

export interface Response extends ApiResponse<null> {}
