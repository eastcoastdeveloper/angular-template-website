import { TestBed } from '@angular/core/testing';

import { WindowWidthService } from './window-width.service';

describe('WindowWidthService', () => {
  let service: WindowWidthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowWidthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
