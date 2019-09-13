import { TestBed } from '@angular/core/testing';

import { MockDatabaseService } from './mock-database.service';
import { Wager } from '../Models/wager.model';

describe('MockDatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockDatabaseService = TestBed.get(MockDatabaseService);
    expect(service).toBeTruthy();
  });

  it('should add new wager to array', () => {
    const service: MockDatabaseService = TestBed.get(MockDatabaseService);

    const wager: Wager = {
      Id: '1GO3',
      CreatedAt: '12/01/19',
      BetAmount: 50,
      CreatedBy: 'User'
    };

    service.createWager(wager);

    expect(service.getAllWagers.length).toBeGreaterThan(0);
  });
});
