import { TestBed } from '@angular/core/testing';

import { MenuAndHeaderService } from './menu-and-header.service';

describe('MenuAndHeaderService', () => {
  let service: MenuAndHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuAndHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
