import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from 'src/Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryUserService implements InMemoryDbService {

  constructor() { }

  createDb() {
    let user = new User('1234-1234-1234', 'user1', 100);

    return user;
  }
}
