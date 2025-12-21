export interface LoginRequest {
  username: string;
  password: string;
  /** Two-factor authentication code (if 2FA is enabled) */
  otp_code?: string;
}
