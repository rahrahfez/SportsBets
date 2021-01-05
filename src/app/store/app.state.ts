import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { AuthState } from '../auth/store/auth.state';
import { authReducer } from '../auth/store/auth.reducer';
import { userReducer } from '../home/store/home.reducer';
import { environment } from '../../environments/environment';
import { UserState } from '../home/store/home.state';

export interface AppState {
  auth: AuthState;
  user: UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  user: userReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
