import { createSelector } from '@ngrx/store';

import { AuthState } from '../store/auth.state';
import { AppState } from 'src/app/store/app.state';

export const selectAuthState = (state: AppState) => state.auth;

export const loggedIn = createSelector(
  selectAuthState,
  (auth) => auth.isLoggedIn);

export const loggedOut = createSelector(
  loggedIn,
  (isLoggedIn) => !isLoggedIn);


