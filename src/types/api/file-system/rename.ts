import type { ApiResponse, FsRenameRequest } from "../../schemas/index.js";

export interface Request extends FsRenameRequest {}

export interface Response extends ApiResponse<null> {}
