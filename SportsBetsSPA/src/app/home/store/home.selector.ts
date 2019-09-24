import { createSelector } from '@ngrx/store';

import { UserState } from '../store/home.state';
import { AppState } from 'src/app/store/app.state';

export const selectUserState = (state: AppState) => state.user;
export const selectUser = (state: UserState) => state.user;

export const selectUsername = createSelector(
  selectUserState,
  (state) => state.user.Username
);

export const selectUserid = createSelector(
  selectUserState,
  (state) => state.user.Id
);

export const SelectUserAvailableBalance = createSelector(
  selectUserState,
  (state) => state.user.AvailableBalance
);
