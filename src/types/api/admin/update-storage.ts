import type { ApiResponse } from "../../schemas/index.js";

export interface Request {
  id: number;
  mount_path: string;
  order: number;
  driver: string;
  cache_expiration: number;
  status: string;
  addition: string;
  remark: string;
  modified: string;
  disabled: boolean;
  disable_index: boolean;
  enable_sign: boolean;
  order_by: string;
  order_direction: string;
  extract_folder: string;
  web_proxy: boolean;
  webdav_policy: string;
  down_proxy_url: string;
}

export interface Response extends ApiResponse<null> {}
