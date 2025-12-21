import type { ApiResponse, DriverInfo } from "../../schemas/index.js";

export interface Request {}

export interface Response extends ApiResponse<DriverInfo[]> {}
