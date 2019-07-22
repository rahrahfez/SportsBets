import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { Login, AuthActions, Logout } from './auth.action';
import { Router } from '@angular/router';
import { TokenService } from 'src/Services/token.service';

@Injectable()
export class AuthEffects {
  @Effect({ dispatch: false })
  login$ = this.action$.pipe(
    ofType<Login>(AuthActions.LOGIN),
    tap(action => {
      this.tokenService.setTokenKey('user', JSON.stringify(action.payload));
      this.router.navigate(['_/dashboard']);
    })
  );

  @Effect({ dispatch: false })
  logout$ = this.action$.pipe(
    ofType<Logout>(AuthActions.LOGOUT),
    tap(() => {
      this.tokenService.removeTokenKey('user');
      this.router.navigate(['/login']);
    })
  );

  constructor(private action$: Actions,
              private router: Router,
              private tokenService: TokenService) {}
}
