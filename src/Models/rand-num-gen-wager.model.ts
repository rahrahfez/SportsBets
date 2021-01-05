import { IWager } from './Iwager.model';

export class RandomNumGenWager implements IWager {
  Id: string;
  CreatedAt: string;
  CreatedBy: string;
  BetAmount: number;
  BetCondition: string;
  IsAccepted: boolean;
}
