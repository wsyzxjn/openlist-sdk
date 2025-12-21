import type { ApiResponse, FsMkdirRequest } from "../../schemas/index.js";

export interface Request extends FsMkdirRequest {}

export interface Response extends ApiResponse<null> {}
