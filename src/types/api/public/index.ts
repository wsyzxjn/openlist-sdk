import type * as GetArchiveExtensions from "./get-archive-extensions.js";
import type * as GetOfflineDownloadTools from "./get-offline-download-tools.js";
import type * as GetSettings from "./get-settings.js";

export default interface PublicEndpoints {
  GetSettings: [GetSettings.Request, GetSettings.Response];
  GetOfflineDownloadTools: [
    GetOfflineDownloadTools.Request,
    GetOfflineDownloadTools.Response,
  ];
  GetArchiveExtensions: [
    GetArchiveExtensions.Request,
    GetArchiveExtensions.Response,
  ];
}
