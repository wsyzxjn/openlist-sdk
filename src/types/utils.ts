import type { ApiResponse } from "./schemas/api-response.js";

export type IsEmptyObject<T> = T extends object
  ? keyof T extends never
    ? true
    : false
  : false;

export type Arg<T> = IsEmptyObject<NonNullable<T>> extends true ? void : T;

export type EndpointTuple<
  Req = unknown,
  Res extends ApiResponse = ApiResponse,
> = readonly [Req, Res];

export type ReqOf<
  API extends { [K in keyof API]: EndpointTuple },
  K extends keyof API,
> = API[K][0];

export type ResOf<
  API extends { [K in keyof API]: EndpointTuple },
  K extends keyof API,
> = API[K][1];

export type ApiMethod<API extends { [K in keyof API]: EndpointTuple }> = {
  [K in keyof API & string as Uncapitalize<K>]: (
    data: Arg<API[K][0]>
  ) => Promise<API[K][1]["data"]>;
};
