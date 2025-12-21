import type { KyInstance, Options } from "ky";
import type { Arg, EndpointTuple, ReqOf, ResOf } from "../types/utils.js";
import type { ApiResponse } from "../types/schemas/api-response.js";

export class BaseApi<
  Endpoints extends { [K in keyof Endpoints]: EndpointTuple },
> {
  constructor(protected readonly httpClient: KyInstance) {}

  protected async request<K extends keyof Endpoints>(
    key: K,
    endpoint: string,
    options: Options
  ) {
    void key;
    try {
      return this.httpClient(endpoint, options);
    } catch (error) {
      throw new Error(`Request ${String(key)} failed`, {
        cause: error,
      });
    }
  }

  protected async postJson<K extends keyof Endpoints>(
    key: K,
    endpoint: string,
    body: Arg<ReqOf<Endpoints, K>>
  ): Promise<ResOf<Endpoints, K>["data"]> {
    const res = await this.request(key, endpoint, {
      method: "post",
      json: body,
    });
    const json = await res.json<ResOf<Endpoints, K>>().catch(error => {
      throw new Error(`Request "${String(key)}" JSON parsing failed`, {
        cause: error,
      });
    });
    if (!isApiResponseLike(json)) throw new Error("Invalid JSON response");
    jsonErrorHandler(json);
    return json.data;
  }

  protected async getJson<K extends keyof Endpoints>(
    key: K,
    endpoint: string,
    searchParams: Arg<ReqOf<Endpoints, K>>
  ): Promise<ResOf<Endpoints, K>["data"]> {
    const res = await this.request(key, endpoint, {
      method: "get",
      searchParams: searchParams ?? {},
    });
    const json = await res.json<ResOf<Endpoints, K>>().catch(error => {
      throw new Error(`Request "${String(key)}" JSON parsing failed`, {
        cause: error,
      });
    });
    if (!isApiResponseLike(json)) throw new Error("Invalid JSON response");
    jsonErrorHandler(json);
    return json.data;
  }
}

const hasOwn = (obj: object, key: string) =>
  Object.prototype.hasOwnProperty.call(obj, key);
const isApiResponseLike = (value: unknown): boolean => {
  if (typeof value !== "object" || value === null) return false;
  const record = value as Record<string, unknown>;
  if (!hasOwn(record, "code") || !hasOwn(record, "message")) return false;
  return typeof record.code === "number" && typeof record.message === "string";
};

const jsonErrorHandler = (json: ApiResponse) => {
  if (json.code !== 200)
    throw new Error(`Response Code Error: ${json.code} ${json.message}`);
};
