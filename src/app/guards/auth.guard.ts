import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanLoad,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Router,
  Route
} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

import { AppState } from 'src/app/root-store/root.state';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private jwt: JwtHelperService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)
      : Observable<boolean> | Promise<boolean> | boolean {
        const token = localStorage.getItem('token');

        if (token && !this.jwt.isTokenExpired(token)) {
          return true;
        }
  }
}
