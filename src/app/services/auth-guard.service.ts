import { Injectable } from "@angular/core";
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate
} from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthService) {}

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {

    console.log(next);
    console.log(state);
    
    

    if (this.auth.isAuthenticated()) {
      console.log("Paso el Guard");
      return true;
    } else {
      console.error("BLOQUADO por el Guard");
      return false;
    }
  }
}
