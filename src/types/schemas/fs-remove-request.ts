export interface FsRemoveRequest {
  /** Directory containing files to remove */
  dir: string;
  /** List of file/folder names to remove */
  names: string[];
}
