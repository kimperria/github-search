import { TestBed } from '@angular/core/testing';

import { ReposerviceService } from './reposervice.service';

describe('ReposerviceService', () => {
  let service: ReposerviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReposerviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
