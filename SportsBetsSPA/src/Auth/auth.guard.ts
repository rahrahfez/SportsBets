import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.state';
import { loggedIn } from './store/auth.selector';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/Services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean> {
      return this.store.pipe(
        select(loggedIn),
        tap(isLoggedIn => {
          if (!isLoggedIn || !this.authService.isAuthenticated()) {
            this.router.navigate(['/login']);
          }
        })
      );
  }
}
