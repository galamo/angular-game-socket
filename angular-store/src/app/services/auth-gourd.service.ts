import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthGourdService implements CanActivate {
  constructor() {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    //check some condition
    if (false) {
      alert("You are not allowed to view this page");
      //redirect to login/home page etc
      //return false to cancel the navigation
      return false;
    }
    return true;
  }
}

// object id
// populate
// ref
