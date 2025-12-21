import type { ApiResponse, FsRemoveRequest } from "../../schemas/index.js";

export interface Request extends FsRemoveRequest {}

export interface Response extends ApiResponse<null> {}
