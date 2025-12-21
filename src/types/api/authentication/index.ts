import type * as Generate2faSecret from "./generate-2fa-secret.js";
import type * as LdapLogin from "./ldap-login.js";
import type * as Login from "./login.js";
import type * as LoginHashed from "./login-hashed.js";
import type * as Logout from "./logout.js";
import type * as SsoCallback from "./sso-callback.js";
import type * as VerifyEnable2fa from "./verify-enable-2fa.js";
import type * as WebauthnBeginLogin from "./webauthn-begin-login.js";
import type * as WebauthnBeginRegistration from "./webauthn-begin-registration.js";
import type * as WebauthnDeleteCredential from "./webauthn-delete-credential.js";
import type * as WebauthnFinishLogin from "./webauthn-finish-login.js";
import type * as WebauthnFinishRegistration from "./webauthn-finish-registration.js";
import type * as WebauthnGetCredentials from "./webauthn-get-credentials.js";

export default interface AuthenticationEndpoints {
  Generate2faSecret: [Generate2faSecret.Request, Generate2faSecret.Response];
  LdapLogin: [LdapLogin.Request, LdapLogin.Response];
  Login: [Login.Request, Login.Response];
  LoginHashed: [LoginHashed.Request, LoginHashed.Response];
  Logout: [Logout.Request, Logout.Response];
  SsoCallback: [SsoCallback.Request, SsoCallback.Response];
  VerifyEnable2fa: [VerifyEnable2fa.Request, VerifyEnable2fa.Response];
  WebauthnBeginLogin: [WebauthnBeginLogin.Request, WebauthnBeginLogin.Response];
  WebauthnBeginRegistration: [
    WebauthnBeginRegistration.Request,
    WebauthnBeginRegistration.Response,
  ];
  WebauthnDeleteCredential: [
    WebauthnDeleteCredential.Request,
    WebauthnDeleteCredential.Response,
  ];
  WebauthnFinishLogin: [
    WebauthnFinishLogin.Request,
    WebauthnFinishLogin.Response,
  ];
  WebauthnFinishRegistration: [
    WebauthnFinishRegistration.Request,
    WebauthnFinishRegistration.Response,
  ];
  WebauthnGetCredentials: [
    WebauthnGetCredentials.Request,
    WebauthnGetCredentials.Response,
  ];
}
