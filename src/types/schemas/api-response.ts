export interface ApiResponse<T = unknown> {
  /** HTTP status code */
  code: number;
  /** Response message */
  message: string;
  /** Response payload (type varies by endpoint) */
  data?: T;
}
