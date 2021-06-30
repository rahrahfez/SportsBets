import { Action } from '@ngrx/store';

export enum AuthActions {
  LOGIN = '[AUTH] Login',
  LOGOUT = '[AUTH] Logout'
}

export class Login implements Action {
  readonly type = AuthActions.LOGIN;

  constructor() {}
}

export class Logout implements Action {
  readonly type = AuthActions.LOGOUT;
}

export type AuthActionTypes = Login | Logout;
