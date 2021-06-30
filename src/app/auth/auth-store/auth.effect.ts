import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { tap, pluck } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Login, AuthActions, Logout } from './auth.action';
import { TokenService } from 'src/app/services/token.service';

@Injectable()
export class AuthEffects {
  @Effect({ dispatch: false }) login$ = this.action$
  .pipe(
    ofType<Login>(AuthActions.LOGIN),
    tap(() => {
      this.router.navigate(['/']);
    })
  );

  @Effect({ dispatch: false }) logout$ = this.action$
  .pipe(
    ofType<Logout>(AuthActions.LOGOUT),
    tap(() => {
      this.tokenService.removeTokenKey('token');
      this.router.navigate(['/']);
    })
  );

  constructor(private action$: Actions,
              private router: Router,
              private tokenService: TokenService) {}
}
