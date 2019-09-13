import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryWagerService implements InMemoryDbService {

  constructor() { }

  createDb() {
    let wagers = [
      { id: 1, createdBy: 'user1', condition: 'Greater Than', amount: 25 },
      { id: 2, createdBy: 'user5', condition: 'Less Than', amount: 20 },
      { id: 3, createdBy: 'user9', condition: 'Less Than', amount: 32 },
      { id: 4, createdBy: 'user1', condition: 'Greater Than', amount: 40 },
      { id: 5, createdBy: '12039', condition: 'Less Than', amount: 89 }
    ];
    return { wagers };
  }
}
