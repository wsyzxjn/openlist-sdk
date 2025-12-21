import type { StorageDetails } from "./storage-details.js";

export interface FsObject {
  /** Object ID (may be empty for local storage) */
  id?: string;
  /** Full system path */
  path?: string;
  /** File or directory name */
  name?: string;
  /** File size in bytes (0 for directories) */
  size?: number;
  /** Whether this is a directory */
  is_dir?: boolean;
  /** Last modified time */
  modified?: string;
  /** Creation time */
  created?: string;
  /** Signature for download authentication */
  sign?: string;
  /** Thumbnail URL (if available) */
  thumb?: string;
  /** File type: 0=Unknown, 1=Folder, 2=Video, 3=Audio, 4=Text, 5=Image */
  type?: number;
  /** Hash information (JSON string or "null") */
  hashinfo?: string;
  /** Parsed hash information */
  hash_info?: Record<string, string> | null;
  mount_details?: StorageDetails | null;
}
