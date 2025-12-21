import type { ApiResponse, FsMoveCopyRequest } from "../../schemas/index.js";

export interface Request extends FsMoveCopyRequest {}

export interface Response extends ApiResponse<null> {}
