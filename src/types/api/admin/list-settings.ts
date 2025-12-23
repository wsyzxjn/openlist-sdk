import type { ApiResponse } from "../../schemas/index.js";

export interface Request {}

export interface Response
  extends ApiResponse<
    Array<{
      key: string;
      value: string;
      type: string;
      options: string;
      group: number;
      flag: number;
    }>
  > {}
