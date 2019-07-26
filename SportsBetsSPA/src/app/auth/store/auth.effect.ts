import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Login, AuthActions, Logout } from './auth.action';
import { TokenService } from 'src/Services/token.service';
import { RepositoryService } from 'src/Services/repository.service';

@Injectable()
export class AuthEffects {
  @Effect({ dispatch: false })
  login$ = this.action$.pipe(
    ofType<Login>(AuthActions.LOGIN),
    tap(action => {
      this.tokenService.setTokenKey('token', JSON.stringify(action.payload.user['token']));
      this.router.navigate(['/dashboard']);
    })
  );

  @Effect({ dispatch: false })
  logout$ = this.action$.pipe(
    ofType<Logout>(AuthActions.LOGOUT),
    tap(() => {
      this.tokenService.removeTokenKey('token');
      this.router.navigate(['/login']);
    })
  );

  constructor(private action$: Actions,
              private router: Router,
              private tokenService: TokenService,
              private repositoryService: RepositoryService) {}
}
