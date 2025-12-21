import type { ShareCreateResponse } from "../../schemas/index.js";

export interface Request {
  paths: string[];
  password?: string;
  expiration?: string;
}

export interface Response extends ShareCreateResponse {}
