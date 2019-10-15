import { initialAuthState, AuthState } from './auth.state';
import { AuthActionTypes, AuthActions } from './auth.action';

export function authReducer(state = initialAuthState, action: AuthActionTypes)
  : AuthState {
  switch (action.type) {
    case AuthActions.LOGIN: {
      return {
        ...state,
        isLoggedIn: true,
        errorMessage: null
      };
    }
    case AuthActions.LOGOUT: {
      return initialAuthState;
    }
    default: {
      return state;
    }
  }
}
