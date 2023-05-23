import { TestBed } from '@angular/core/testing';

import { BaseCallService } from './base-call.service';

describe('BaseCallService', () => {
  let service: BaseCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
