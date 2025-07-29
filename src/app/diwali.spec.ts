import { TestBed } from '@angular/core/testing';

import { Diwali } from './diwali';

describe('Diwali', () => {
  let service: Diwali;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Diwali);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
