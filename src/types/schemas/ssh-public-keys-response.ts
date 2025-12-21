import type { ApiResponse } from "./api-response.js";
import type { SshPublicKey } from "./ssh-public-key.js";

export type SshPublicKeysResponse = ApiResponse<SshPublicKey[]>;
