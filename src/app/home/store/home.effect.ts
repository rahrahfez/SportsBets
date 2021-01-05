import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { UserLogin, UserLogout, UserActions } from './home.action';
import { RepositoryService } from 'src/Services/repository.service';

@Injectable()
export class UserEffects {
  @Effect({ dispatch: false })
  login$ = this.action$.pipe(
    ofType<UserLogin>(UserActions.LOGIN),
    tap((action) => {
      const userid = action.payload.user.Id;
      this.repo.getData('users/' + userid + '/availablebalance')
        .subscribe();
    })
  );

  @Effect({ dispatch: false })
  logout$ = this.action$.pipe(
    ofType<UserLogout>(UserActions.LOGOUT),
    tap()
  );

  constructor(private action$: Actions,
              private repo: RepositoryService) {}
}
