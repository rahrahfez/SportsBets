import { User } from 'src/Models/user.model';

export interface UserState {
  user: User | null;
  errorMessage: string;
}

export const initialUserState: UserState = {
  user: null,
  errorMessage: null
};
