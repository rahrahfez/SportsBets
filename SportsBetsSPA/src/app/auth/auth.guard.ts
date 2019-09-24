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
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';

import { AppState } from 'src/app/store/app.state';
import { loggedIn } from './store/auth.selector';
import { AuthService } from 'src/Services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.pipe(
      select(loggedIn),
      tap(isLoggedIn => {
        if (!isLoggedIn || !this.authService.isAuthenticated()) {
          this.router.navigate(['/login']);
        }
      })
    );
  }
  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
