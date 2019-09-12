import { Injectable } from '@angular/core';

import { Wager } from '../Models/wager.model';
import { RepositoryService } from './repository.service';

@Injectable({
  providedIn: 'root'
})
export class MockDatabaseService {

  constructor(private repo: RepositoryService) { }

  createWager(wager: Wager) {
    this.repo.create('wagers', wager);
  }

  deleteWager(id: string) {
    /*
     * @params(): id is of the wagerId to be deleted.
     */
  }

  getAllWagers() {
    return this.repo.getData('wagers');
  }

  getWagerById(id: string) {
    return this.repo.getDataById('wagers', id);
  }
}
