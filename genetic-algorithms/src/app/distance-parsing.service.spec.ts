import { TestBed } from '@angular/core/testing';

import { DistanceParsingService } from './distance-parsing.service';

describe('DistanceParsingService', () => {
  let service: DistanceParsingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistanceParsingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
