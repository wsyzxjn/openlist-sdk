import type * as AddSSHKey from "./add-ssh-key.js";
import type * as DeleteSSHKey from "./delete-ssh-key.js";
import type * as ListMySSHKeys from "./list-my-ssh-keys.js";
import type * as Me from "./me.js";
import type * as UpdateMe from "./update-me.js";

export default interface UserEndpoints {
  AddSSHKey: [AddSSHKey.Request, AddSSHKey.Response];
  DeleteSSHKey: [DeleteSSHKey.Request, DeleteSSHKey.Response];
  ListMySSHKeys: [ListMySSHKeys.Request, ListMySSHKeys.Response];
  Me: [Me.Request, Me.Response];
  UpdateMe: [UpdateMe.Request, UpdateMe.Response];
}
