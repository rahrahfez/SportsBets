import { Token } from '../../../Models/token.model';

export interface AuthState {
  token: Token | null;
  isLoggedIn: boolean;
  errorMessage: string;
}

export const initialAuthState: AuthState = {
  token: null,
  isLoggedIn: false,
  errorMessage: null
};


