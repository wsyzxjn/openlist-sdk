import type { ApiResponse } from "../../schemas/index.js";

export interface Request {
  id: number;
  username: string;
  password: string;
  base_path: string;
  role: number;
  permission: number;
  disabled: boolean;
}

export interface Response extends ApiResponse<null> {}
