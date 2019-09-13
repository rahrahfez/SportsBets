import { Wager } from './wager.model';

export interface User {
  UserId: string;
  Username: string;
  Email?: string;
  AvailableBalance?: number;
  Wager?: Wager[];
}
