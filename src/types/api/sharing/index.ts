import type * as Create from "./create.js";
import type * as Delete from "./delete.js";
import type * as Disable from "./disable.js";
import type * as Enable from "./enable.js";
import type * as Get from "./get.js";
import type * as List from "./list.js";
import type * as Update from "./update.js";

export default interface SharingEndpoints {
  Create: [Create.Request, Create.Response];
  Delete: [Delete.Request, Delete.Response];
  Disable: [Disable.Request, Disable.Response];
  Enable: [Enable.Request, Enable.Response];
  Get: [Get.Request, Get.Response];
  List: [List.Request, List.Response];
  Update: [Update.Request, Update.Response];
}
