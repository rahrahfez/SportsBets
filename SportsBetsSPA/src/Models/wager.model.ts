export interface Wager {
  WagerId: string;
  CreatedAt: string;
  BetAmount: number;
  CreatedBy: string;
  AcceptedBy?: string;
}
