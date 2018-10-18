// src/app/auth/auth.service.ts

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { filter } from "rxjs/operators";
import * as auth0 from "auth0-js";

(window as any).global = window;

@Injectable()
export class AuthService {
  auth0 = new auth0.WebAuth({
    clientID: "47oCp2AZCWYMYAqsCJ9p6IwJQiTpkTbd",
    domain: "jendrix-accounts.auth0.com",
    responseType: "token id_token",
    redirectUri: "http://localhost:4200/callback",
    scope: "openid"
  });

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
  }
}
