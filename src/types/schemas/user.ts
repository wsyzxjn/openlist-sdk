export interface User {
  /** User unique ID */
  id?: number;
  /** Username */
  username?: string;
  /** Password (empty on read) */
  password?: string;
  /** User's base path */
  base_path?: string;
  /** User role: 0=General, 1=Guest, 2=Admin */
  role?: number;
  /** Whether the user is disabled */
  disabled?: boolean;
  /** Permission (in bit flags): Bit 0: Can see hidden files Bit 1: Can access without password Bit 2: Can add offline download tasks Bit 3: Can mkdir and upload Bit 4: Can rename Bit 5: Can move Bit 6: Can copy Bit 7: Can remove Bit 8: WebDAV read Bit 9: WebDAV write Bit 10: FTP/SFTP login and read Bit 11: FTP/SFTP write Bit 12: Can read archives Bit 13: Can decompress archives Bit 14: Can share */
  permission?: number;
  /** SSO platform ID */
  sso_id?: string;
  /** Whether 2FA is enabled */
  otp?: boolean;
}
