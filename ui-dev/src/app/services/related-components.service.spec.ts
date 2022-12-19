import { TestBed } from '@angular/core/testing';

import { RelatedComponentsService } from './related-components.service';

describe('RelatedComponentsService', () => {
  let service: RelatedComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelatedComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
