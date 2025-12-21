import type PublicEndpoints from "@/types/api/public/index.js";
import type { KyInstance } from "ky";
import type { ApiMethod, Arg, ReqOf } from "../types/utils.js";
import { BaseApi } from "./base-api.js";

type AllEndpoints = keyof PublicEndpoints;

type Req<K extends AllEndpoints> = ReqOf<PublicEndpoints, K>;

export type IPublicApi = ApiMethod<PublicEndpoints>;

export class PublicApi extends BaseApi<PublicEndpoints> implements IPublicApi {
  constructor(httpClient: KyInstance) {
    super(httpClient);
  }

  async getSettings(data: Arg<Req<"GetSettings">>) {
    return this.getJson("GetSettings", "public/settings", data);
  }

  async getOfflineDownloadTools(data: Arg<Req<"GetOfflineDownloadTools">>) {
    return this.getJson(
      "GetOfflineDownloadTools",
      "public/offline_download_tools",
      data
    );
  }

  async getArchiveExtensions(data: Arg<Req<"GetArchiveExtensions">>) {
    return this.getJson(
      "GetArchiveExtensions",
      "public/archive_extensions",
      data
    );
  }
}
