import { IWager } from './wager.model';

export class RandomNumGenWager implements IWager {
  Id: string;
  CreatedAt: string;
  CreatedBy: string;
  BetAmount: number;
  BetCondition: string;
  IsAccepted: boolean;
}
