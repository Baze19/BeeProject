import { TestBed } from '@angular/core/testing';

import { BiodunService } from './biodun.service';

describe('BiodunService', () => {
  let service: BiodunService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiodunService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
