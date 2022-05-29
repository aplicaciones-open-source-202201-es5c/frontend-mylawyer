import { TestBed } from '@angular/core/testing';

import { SearchLawyerService } from './search-lawyer.service';

describe('SearchLawyerService', () => {
  let service: SearchLawyerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchLawyerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
