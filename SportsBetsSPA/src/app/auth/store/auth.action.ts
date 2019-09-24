import { Action } from '@ngrx/store';
import { Token } from 'src/Models/token.model';

export enum AuthActions {
  LOGIN = '[AUTH] Login',
  LOGOUT = '[AUTH] Logout'
}

export class Login implements Action {
  readonly type = AuthActions.LOGIN;

  constructor(private payload: { token: Token }) {}
}

export class Logout implements Action {
  readonly type = AuthActions.LOGOUT;
}

export type AuthActionTypes = Login | Logout;
