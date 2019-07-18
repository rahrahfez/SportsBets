import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { Login, AuthActions, Logout } from './auth.action';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  @Effect({ dispatch: false })
  login$ = this.action$.pipe(
    ofType<Login>(AuthActions.LOGIN),
    tap(action => {
      localStorage.setItem('user', JSON.stringify(action.payload));
      this.router.navigate(['_/dashboard']);
    })
  );

  @Effect({ dispatch: false })
  logout$ = this.action$.pipe(
    ofType<Logout>(AuthActions.LOGOUT),
    tap(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    })
  );

  constructor(private action$: Actions, private router: Router) {}
}
