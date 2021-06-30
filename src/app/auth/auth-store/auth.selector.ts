import { createSelector } from '@ngrx/store';

import { AuthState } from './auth.state';
import { AppState } from 'src/app/root-store/root.state';

export const selectAuthState = (state: AppState) => state.auth;

export const loggedIn = createSelector(
  selectAuthState,
  (auth) => auth.isLoggedIn);

export const loggedOut = createSelector(
  loggedIn,
  (isLoggedIn) => !isLoggedIn);


