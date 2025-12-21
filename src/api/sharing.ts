import type SharingEndpoints from "@/types/api/sharing/index.js";
import type { KyInstance } from "ky";
import type { ApiMethod, Arg, ReqOf } from "../types/utils.js";
import { BaseApi } from "./base-api.js";

type AllEndpoints = keyof SharingEndpoints;

type Req<K extends AllEndpoints> = ReqOf<SharingEndpoints, K>;

export type ISharingApi = ApiMethod<SharingEndpoints>;

export class SharingApi
  extends BaseApi<SharingEndpoints>
  implements ISharingApi
{
  constructor(httpClient: KyInstance) {
    super(httpClient);
  }

  async list(data: Arg<Req<"List">>) {
    return this.postJson("List", "share/list", data);
  }

  async get(data: Arg<Req<"Get">>) {
    return super.getJson("Get", "share/get", data);
  }

  async create(data: Arg<Req<"Create">>) {
    return this.postJson("Create", "share/create", data);
  }

  async update(data: Arg<Req<"Update">>) {
    return this.postJson("Update", "share/update", data);
  }

  async delete(data: Arg<Req<"Delete">>) {
    return this.postJson("Delete", "share/delete", data);
  }

  async enable(data: Arg<Req<"Enable">>) {
    return this.postJson("Enable", "share/enable", data);
  }

  async disable(data: Arg<Req<"Disable">>) {
    return this.postJson("Disable", "share/disable", data);
  }
}
