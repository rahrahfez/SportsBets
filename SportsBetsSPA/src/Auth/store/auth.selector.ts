import { createSelector } from '@ngrx/store';

export const selectAuthState = (state: any) => state.auth;

export const loggedIn = createSelector(selectAuthState, auth => auth.isLoggedIn);
export const loggedOut = createSelector(loggedIn, isLoggedIn => !isLoggedIn);

export const userDisplayName = createSelector(selectAuthState, user => user.user.Username);
