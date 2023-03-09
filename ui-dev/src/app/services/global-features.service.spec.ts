import { TestBed } from '@angular/core/testing';

import { GlobalFeaturesService } from './global-features.service';

describe('GlobalFeaturesService', () => {
  let service: GlobalFeaturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalFeaturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
