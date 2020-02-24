import { Injectable } from "@angular/core";

import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanDeactivate
} from "@angular/router";
import { Observable } from "rxjs";
import { ProductsComponent } from "../components/products/products.component";

@Injectable()
export class DeactivateGuard implements CanDeactivate<any> {
  component: Object;
  route: ActivatedRouteSnapshot;

  constructor() {}

  canDeactivate(
    component: ProductsComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
