import { TestBed } from '@angular/core/testing';

import { ApiLinkedinService } from './api-linkedin.service';

describe('ApiLinkedinService', () => {
  let service: ApiLinkedinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiLinkedinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
