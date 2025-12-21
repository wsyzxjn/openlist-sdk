import type { LoginResponse } from "../../schemas/index.js";

export interface Request {
  username: string;
  password: string;
  otp_code?: string;
}

export interface Response extends LoginResponse {}
