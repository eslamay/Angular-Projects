import { TestBed } from '@angular/core/testing';

import { MockTimeService } from './mock-time.service';

describe('MockTimeService', () => {
  let service: MockTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
