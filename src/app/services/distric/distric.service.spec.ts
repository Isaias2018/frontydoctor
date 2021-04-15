import { TestBed } from '@angular/core/testing';

import { DistricService } from './distric.service';

describe('DistricService', () => {
  let service: DistricService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistricService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
