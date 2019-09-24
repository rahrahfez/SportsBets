import { Action } from '@ngrx/store';
import { User } from 'src/Models/user.model';

export enum UserActions {
  LOGIN = '[USER] Login',
  LOGOUT = '[USER] Logout'
}

export class Login implements Action {
  readonly type = UserActions.LOGIN;
  constructor(public payload: { user: User }) {}
}

export class Logout implements Action {
  readonly type = UserActions.LOGOUT;
}

export type UserActionTypes = Login | Logout;
