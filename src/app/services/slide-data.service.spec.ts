import { TestBed } from '@angular/core/testing';

import { SlideDataService } from './slide-data.service';

describe('SlideDataService', () => {
  let service: SlideDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlideDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
