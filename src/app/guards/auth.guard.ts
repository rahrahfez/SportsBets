import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanLoad,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Router,
  Route
} from '@angular/router';
import { Observable } from 'rxjs';

import { AppState } from 'src/app/store/app.state';


@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)
      : Observable<boolean> | Promise<boolean> | boolean {
        return true;
  }
  canLoad(route: Route)
    : Observable<boolean> | Promise<boolean> | boolean {
      return true;
  }
}
