import type AuthenticationEndpoints from "@/types/api/authentication/index.js";
import type { KyInstance } from "ky";
import type { ApiMethod, Arg, ReqOf } from "../types/utils.js";
import { BaseApi } from "./base-api.js";

type AllEndpoints = keyof AuthenticationEndpoints;

type Req<K extends AllEndpoints> = ReqOf<AuthenticationEndpoints, K>;

export type IAuthenticationApi = ApiMethod<AuthenticationEndpoints>;

export class AuthenticationApi
  extends BaseApi<AuthenticationEndpoints>
  implements IAuthenticationApi
{
  constructor(httpClient: KyInstance) {
    super(httpClient);
  }

  async generate2faSecret(data: Arg<Req<"Generate2faSecret">>) {
    return this.postJson("Generate2faSecret", "auth/2fa/generate", data);
  }

  async verifyEnable2fa(data: Arg<Req<"VerifyEnable2fa">>) {
    return this.postJson("VerifyEnable2fa", "auth/2fa/verify", data);
  }

  async login(data: Arg<Req<"Login">>) {
    return this.postJson("Login", "auth/login", data);
  }

  async loginHashed(data: Arg<Req<"LoginHashed">>) {
    return this.postJson("LoginHashed", "auth/login/hash", data);
  }

  async ldapLogin(data: Arg<Req<"LdapLogin">>) {
    return this.postJson("LdapLogin", "auth/login/ldap", data);
  }

  async logout(data: Arg<Req<"Logout">>) {
    return this.getJson("Logout", "auth/logout", data);
  }

  async ssoCallback(data: Arg<Req<"SsoCallback">>) {
    return this.getJson("SsoCallback", "auth/sso_callback", data);
  }

  async webauthnBeginLogin(data: Arg<Req<"WebauthnBeginLogin">>) {
    return this.getJson(
      "WebauthnBeginLogin",
      "authn/webauthn_begin_login",
      data
    );
  }

  async webauthnFinishLogin(data: Arg<Req<"WebauthnFinishLogin">>) {
    return this.postJson(
      "WebauthnFinishLogin",
      "authn/webauthn_finish_login",
      data
    );
  }

  async webauthnBeginRegistration(data: Arg<Req<"WebauthnBeginRegistration">>) {
    return this.getJson(
      "WebauthnBeginRegistration",
      "authn/webauthn_begin_registration",
      data
    );
  }

  async webauthnFinishRegistration(
    data: Arg<Req<"WebauthnFinishRegistration">>
  ) {
    return this.postJson(
      "WebauthnFinishRegistration",
      "authn/webauthn_finish_registration",
      data
    );
  }

  async webauthnDeleteCredential(data: Arg<Req<"WebauthnDeleteCredential">>) {
    return this.postJson(
      "WebauthnDeleteCredential",
      "authn/delete_authn",
      data
    );
  }

  async webauthnGetCredentials(data: Arg<Req<"WebauthnGetCredentials">>) {
    return this.getJson("WebauthnGetCredentials", "authn/getcredentials", data);
  }
}
