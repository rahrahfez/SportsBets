import { RandomNumGenWager } from './rand-num-gen-wager.model';

export class User {
  constructor(
      public Id: string,
      public Username: string,
      public AvailableBalance?: number,
      public RandomNumGenWagers?: RandomNumGenWager[]) {}
}
