import type { UserResponse } from "../../schemas/index.js";

export interface Request {
  id: number;
}

export interface Response extends UserResponse {}
