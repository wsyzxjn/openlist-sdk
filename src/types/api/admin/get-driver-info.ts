import type { ApiResponse, DriverInfo } from "../../schemas/index.js";

export interface Request {
  driver: string;
}

export interface Response extends ApiResponse<DriverInfo> {}
