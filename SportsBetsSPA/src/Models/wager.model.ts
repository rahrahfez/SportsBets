export interface Wager {
  WagerId: string;
  CreatedAt: Date;
  BetAmount: number;
  CreatedBy: string;
  AcceptedBy?: string;
}
