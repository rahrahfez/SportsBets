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
import { AuthService } from 'src/Services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)
      : Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.isLoggedIn()) {
          console.log('CanActivate()');
          return !this.authService.isLoggedIn();
        }
        return false;
  }
  canLoad(route: Route)
    : Observable<boolean> | Promise<boolean> | boolean {
      if (this.authService.isLoggedIn()) {
        console.log('CanLoad()');
        this.router.navigate(['/home']);
        return !this.authService.isLoggedIn();
      }
      return false;
  }
}
