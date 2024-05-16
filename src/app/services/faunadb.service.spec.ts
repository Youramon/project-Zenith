import { TestBed } from '@angular/core/testing';

import { FaunadbService } from './faunadb.service';

describe('FaunadbService', () => {
  let service: FaunadbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaunadbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
