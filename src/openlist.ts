import ky from "ky";
import type { AfterResponseHook } from "ky";
import { AdminApi } from "./api/admin.js";
import { AuthenticationApi } from "./api/authentication.js";
import { FileSystemApi } from "./api/file-system.js";
import { PublicApi } from "./api/public.js";
import { SharingApi } from "./api/sharing.js";
import { UserApi } from "./api/user.js";

export interface OpenListOptions {
  token: string;
  baseUrl: string;
}

export class OpenList {
  readonly admin: AdminApi;
  readonly authentication: AuthenticationApi;
  readonly user: UserApi;
  readonly fileSystem: FileSystemApi;
  readonly sharing: SharingApi;
  readonly public: PublicApi;

  constructor({ token, baseUrl }: OpenListOptions) {
    const apiUrl = new URL("api/", baseUrl);
    const createHttp = (prefixUrl: string) => {
      return ky.create({
        prefixUrl: new URL(prefixUrl, apiUrl),
        headers: {
          Authorization: token,
        },
      });
    };

    this.admin = new AdminApi(createHttp("admin"));
    this.authentication = new AuthenticationApi(createHttp("auth"));
    this.user = new UserApi(createHttp("me"));
    this.fileSystem = new FileSystemApi(createHttp("fs"));
    this.sharing = new SharingApi(createHttp("share"));
    this.public = new PublicApi(createHttp("public"));
  }
}
