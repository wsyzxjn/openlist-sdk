import type UserEndpoints from "@/types/api/user/index.js";
import type { KyInstance } from "ky";
import type { ApiMethod, Arg, ReqOf } from "../types/utils.js";
import { BaseApi } from "./base-api.js";

type AllEndpoints = keyof UserEndpoints;

type Req<K extends AllEndpoints> = ReqOf<UserEndpoints, K>;

export type IUserApi = ApiMethod<UserEndpoints>;

export class UserApi extends BaseApi<UserEndpoints> implements IUserApi {
  constructor(httpClient: KyInstance) {
    super(httpClient);
  }

  async me(data: Arg<Req<"Me">>) {
    return this.getJson("Me", "", data);
  }

  async updateMe(data: Arg<Req<"UpdateMe">>) {
    return this.postJson("UpdateMe", "update", data);
  }

  async listMySSHKeys(data: Arg<Req<"ListMySSHKeys">>) {
    return this.getJson("ListMySSHKeys", "sshkey/list", data);
  }

  async addSSHKey(data: Arg<Req<"AddSSHKey">>) {
    return this.postJson("AddSSHKey", "sshkey/add", data);
  }

  async deleteSSHKey(data: Arg<Req<"DeleteSSHKey">>) {
    return this.postJson("DeleteSSHKey", "sshkey/delete", data);
  }
}
