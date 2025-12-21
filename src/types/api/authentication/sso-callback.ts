import type { LoginResponse } from "../../schemas/index.js";

export interface Request {
  code: string;
  state?: string;
}

export interface Response extends LoginResponse {}
