import { TestBed } from '@angular/core/testing';

import { WagerService } from './wager.service';

describe('WagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WagerService = TestBed.get(WagerService);
    expect(service).toBeTruthy();
  });
});
