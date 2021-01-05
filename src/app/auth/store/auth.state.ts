export interface AuthState {
  isLoggedIn: boolean;
  errorMessage: string;
}

export const initialAuthState: AuthState = {
  isLoggedIn: false,
  errorMessage: null
};


