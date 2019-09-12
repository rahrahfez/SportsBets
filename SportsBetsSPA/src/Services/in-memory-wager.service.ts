import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Wager } from 'src/Models/wager.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryWagerService implements InMemoryDbService {

  constructor() { }

  createDb() {
    let wagers: Wager[] = [];
    return { wagers };
  }
}
