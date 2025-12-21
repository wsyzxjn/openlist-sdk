export interface ErrorResponse {
  /** Error code */
  code: number;
  /** Error message */
  message: string;
  data?: unknown | null;
}
