import { Injectable } from '@angular/core';

import { Wager } from '../Models/wager.model';

@Injectable({
  providedIn: 'root'
})
export class MockDatabaseService {

  mockWagers: Wager[] = [];

  constructor() { }

  createWager(wager: Wager) {
    this.mockWagers.push(wager);
  }

  acceptWager(wager: Wager, acceptedBy: string) {
    /*
     * @params(): wager is the current wager, acceptedBy is current UserId.
     * Takes the current wagerid, replace previous UserId with current UserId(acceptedBy)
     */
  }

  deleteWager(id: string) {
    /*
     * @params(): id is of the wagerId to be deleted.
     */
  }

  getAllWagers(): Wager[] {
    return this.mockWagers;
  }
}
