import { Action } from '@ngrx/store';
import { User } from 'src/Models/user.model';

export enum UserActions {
  LOGIN = '[USER] Login',
  LOGOUT = '[USER] Logout'
}

export class UserLogin implements Action {
  readonly type = UserActions.LOGIN;

  constructor(public payload: { user: User }) {}
}

export class UserLogout implements Action {
  readonly type = UserActions.LOGOUT;
}

export type UserActionTypes = UserLogin | UserLogout;
