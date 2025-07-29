import { TestBed } from '@angular/core/testing';

import { BehaviourMessageServics } from './behaviour-message-servics';

describe('BehaviourMessageServics', () => {
  let service: BehaviourMessageServics;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehaviourMessageServics);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
