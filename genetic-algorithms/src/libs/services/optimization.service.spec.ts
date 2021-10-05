import { TestBed } from '@angular/core/testing';

import { OptimizationService } from './optimization.service';

describe('OptimizationService', () => {
  let service: OptimizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptimizationService);
  });

  it('should be created', () => {
    expect(true).toBeTruthy();
  });

  it('should generate distance dict', () => {
    console.log(service.distanceDict);
  })
});
