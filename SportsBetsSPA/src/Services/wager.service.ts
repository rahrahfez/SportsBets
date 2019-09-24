import { Injectable } from '@angular/core';

import { IWager } from 'src/Models/Iwager.model';

@Injectable({
  providedIn: 'root'
})
export class WagerService {

  constructor() { }

  acceptWager(wager: IWager, acceptedBy: string) {
    /*
     * @params(): wager is the current wager, acceptedBy is current UserId.
     * Takes the current wagerid, replace previous UserId with current UserId(acceptedBy)
     */
  }
}
