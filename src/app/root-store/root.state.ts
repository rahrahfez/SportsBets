import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { AuthState } from '../auth/auth-store/auth.state';
import { authReducer } from '../auth/auth-store/auth.reducer';
import { environment } from '../../environments/environment';

export interface AppState {
  auth: AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
