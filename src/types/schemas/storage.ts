export interface Storage {
  id?: number;
  /** Path where storage is mounted */
  mount_path?: string;
  /** Display order */
  order?: number;
  /** Storage driver name */
  driver?: string;
  /** Cache expiration time in minutes */
  cache_expiration?: number;
  /** Storage status */
  status?: string;
  /** Driver-specific configuration (JSON string) */
  addition?: string;
  /** Storage description/notes */
  remark?: string;
  modified?: string;
  disabled?: boolean;
  /** Disable search indexing for this storage */
  disable_index?: boolean;
  /** Enable signature verification for downloads */
  enable_sign?: boolean;
  /** Default sort field */
  order_by?: string;
  order_direction?: string;
  /** Extract folder behavior */
  extract_folder?: string;
  web_proxy?: boolean;
  webdav_policy?: string;
  /** Proxy URL for downloads */
  down_proxy_url?: string;
}
