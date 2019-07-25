import { User } from '../../../Models/user.model';

export interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
  errorMessage: string;
}

export const initialAuthState: AuthState = {
  user: null,
  isLoggedIn: false,
  errorMessage: null
};


