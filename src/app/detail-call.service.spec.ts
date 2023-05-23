import { TestBed } from '@angular/core/testing';

import { DetailCallService } from './detail-call.service';

describe('DetailCallService', () => {
  let service: DetailCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
