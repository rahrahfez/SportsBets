import { TestBed } from '@angular/core/testing';

import { RepositoryService } from './repository.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RepositoryService', () => {
  let service: RepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ RepositoryService ],
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.get(RepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });
});
