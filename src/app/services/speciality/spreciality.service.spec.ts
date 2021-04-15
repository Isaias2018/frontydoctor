import { TestBed } from '@angular/core/testing';

import { SprecialityService } from './spreciality.service';

describe('SprecialityService', () => {
  let service: SprecialityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SprecialityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
