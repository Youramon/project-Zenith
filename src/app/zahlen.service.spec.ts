import { TestBed } from '@angular/core/testing';

import { ZahlenService } from './zahlen.service';

describe('ZahlenService', () => {
  let service: ZahlenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZahlenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
