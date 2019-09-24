import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { Login, UserActions } from './home.action';
import { RepositoryService } from 'src/Services/repository.service';

@Injectable()
export class UserEffects {
  @Effect({ dispatch: false })
  login$ = this.action$.pipe(
    ofType<Login>(UserActions.LOGIN),
    tap(action => {
    })
  );

  constructor(private action$: Actions,
              private repo: RepositoryService) {}
}
