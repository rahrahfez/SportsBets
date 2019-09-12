import { TestBed } from '@angular/core/testing';

import { InMemoryWagerService } from './in-memory-wager.service';

describe('InMemoryWagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryWagerService = TestBed.get(InMemoryWagerService);
    expect(service).toBeTruthy();
  });
});
