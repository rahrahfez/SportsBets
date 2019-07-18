import { Action } from '@ngrx/store';
import { User } from 'src/Models/user.model';

export enum AuthActions {
  LOGIN = '[AUTH] Login',
  LOGOUT = '[AUTH] Logout'
}

export class Login implements Action {
  readonly type = AuthActions.LOGIN;

  constructor(public payload: { user: User }) {}
}

export class Logout implements Action {
  readonly type = AuthActions.LOGOUT;
}

export type AuthActionTypes = Login | Logout;
