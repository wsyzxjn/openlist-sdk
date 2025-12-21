import type AdminEndpoints from "@/types/api/admin/index.js";
import type { KyInstance } from "ky";
import type { ApiMethod, Arg, ReqOf } from "../types/utils.js";
import { BaseApi } from "./base-api.js";

type AllEndpoints = keyof AdminEndpoints;

type Req<K extends AllEndpoints> = ReqOf<AdminEndpoints, K>;

export type IAdminApi = ApiMethod<AdminEndpoints>;

export class AdminApi extends BaseApi<AdminEndpoints> implements IAdminApi {
  constructor(httpClient: KyInstance) {
    super(httpClient);
  }

  async buildSearchIndex(data: Arg<Req<"BuildSearchIndex">>) {
    return this.postJson("BuildSearchIndex", "index/build", data);
  }

  async cancelUser2fa(data: Arg<Req<"CancelUser2fa">>) {
    return this.postJson("CancelUser2fa", "user/cancel_2fa", data);
  }

  async clearSearchIndex(data: Arg<Req<"ClearSearchIndex">>) {
    return this.postJson("ClearSearchIndex", "index/clear", data);
  }

  async clearUserCache(data: Arg<Req<"ClearUserCache">>) {
    return this.postJson("ClearUserCache", "user/del_cache", data);
  }

  async createMeta(data: Arg<Req<"CreateMeta">>) {
    return this.postJson("CreateMeta", "meta/create", data);
  }

  async createStorage(data: Arg<Req<"CreateStorage">>) {
    return this.postJson("CreateStorage", "storage/create", data);
  }

  async createUser(data: Arg<Req<"CreateUser">>) {
    return this.postJson("CreateUser", "user/create", data);
  }

  async deleteMeta(data: Arg<Req<"DeleteMeta">>) {
    return this.postJson("DeleteMeta", "meta/delete", data);
  }

  async deleteSetting(data: Arg<Req<"DeleteSetting">>) {
    return this.postJson("DeleteSetting", "setting/delete", data);
  }

  async deleteStorage(data: Arg<Req<"DeleteStorage">>) {
    return this.postJson("DeleteStorage", "storage/delete", data);
  }

  async deleteUser(data: Arg<Req<"DeleteUser">>) {
    return this.postJson("DeleteUser", "user/delete", data);
  }

  async deleteUserSshKey(data: Arg<Req<"DeleteUserSshKey">>) {
    return this.postJson("DeleteUserSshKey", "user/sshkey/delete", data);
  }

  async disableStorage(data: Arg<Req<"DisableStorage">>) {
    return this.postJson("DisableStorage", "storage/disable", data);
  }

  async enableStorage(data: Arg<Req<"EnableStorage">>) {
    return this.postJson("EnableStorage", "storage/enable", data);
  }

  async getDriverInfo(data: Arg<Req<"GetDriverInfo">>) {
    return this.getJson("GetDriverInfo", "driver/info", data);
  }

  async getDriverNames(data: Arg<Req<"GetDriverNames">>) {
    return this.getJson("GetDriverNames", "driver/names", data);
  }

  async getIndexingProgress(data: Arg<Req<"GetIndexingProgress">>) {
    return this.getJson("GetIndexingProgress", "index/progress", data);
  }

  async getMeta(data: Arg<Req<"GetMeta">>) {
    return this.getJson("GetMeta", "meta/get", data);
  }

  async getSetting(data: Arg<Req<"GetSetting">>) {
    return this.getJson("GetSetting", "setting/get", data);
  }

  async getStorage(data: Arg<Req<"GetStorage">>) {
    return this.getJson("GetStorage", "storage/get", data);
  }

  async getUser(data: Arg<Req<"GetUser">>) {
    return this.getJson("GetUser", "user/get", data);
  }

  async listDrivers(data: Arg<Req<"ListDrivers">>) {
    return this.getJson("ListDrivers", "driver/list", data);
  }

  async listMetas(data: Arg<Req<"ListMetas">>) {
    return this.getJson("ListMetas", "meta/list", data);
  }

  async listSettings(data: Arg<Req<"ListSettings">>) {
    return this.getJson("ListSettings", "setting/list", data);
  }

  async listStorages(data: Arg<Req<"ListStorages">>) {
    return this.getJson("ListStorages", "storage/list", data);
  }

  async listUsers(data: Arg<Req<"ListUsers">>) {
    return this.getJson("ListUsers", "user/list", data);
  }

  async listUserSshKeys(data: Arg<Req<"ListUserSshKeys">>) {
    return this.getJson("ListUserSshKeys", "user/sshkey/list", data);
  }

  async reloadAllStorages(data: Arg<Req<"ReloadAllStorages">>) {
    return this.postJson("ReloadAllStorages", "storage/load_all", data);
  }

  async resetApiToken(data: Arg<Req<"ResetApiToken">>) {
    return this.postJson("ResetApiToken", "setting/reset_token", data);
  }

  async saveSettings(data: Arg<Req<"SaveSettings">>) {
    return this.postJson("SaveSettings", "setting/save", data);
  }

  async stopIndexing(data: Arg<Req<"StopIndexing">>) {
    return this.postJson("StopIndexing", "index/stop", data);
  }

  async updateMeta(data: Arg<Req<"UpdateMeta">>) {
    return this.postJson("UpdateMeta", "meta/update", data);
  }

  async updateSearchIndex(data: Arg<Req<"UpdateSearchIndex">>) {
    return this.postJson("UpdateSearchIndex", "index/update", data);
  }

  async updateStorage(data: Arg<Req<"UpdateStorage">>) {
    return this.postJson("UpdateStorage", "storage/update", data);
  }

  async updateUser(data: Arg<Req<"UpdateUser">>) {
    return this.postJson("UpdateUser", "user/update", data);
  }
}
