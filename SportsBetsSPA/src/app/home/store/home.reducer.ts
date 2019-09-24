import { initialUserState, UserState } from './home.state';
import { UserActionTypes, UserActions } from './home.action';

export function userReducer(state = initialUserState, action: UserActionTypes)
  : UserState {
    switch (action.type) {
      case UserActions.LOGIN: {
        return {
          ...state,
          user: action.payload.user,
          errorMessage: null
        };
      }
      case UserActions.LOGOUT: {
        return initialUserState;
      }
      default: {
        return state;
      }
    }
  }
