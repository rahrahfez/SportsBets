import { Wager } from './wager.model';

export class RandomNumGenWager implements Wager {
  Id: string;
  CreatedAt: string;
  CreatedBy: string;
  BetAmount: number;
  BetCondition: string;
  IsAccepted: boolean;
}
