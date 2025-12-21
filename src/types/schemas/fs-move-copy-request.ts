export interface FsMoveCopyRequest {
  /** Source directory path */
  src_dir: string;
  /** Destination directory path */
  dst_dir: string;
  /** List of file/folder names to move/copy */
  names: string[];
}
