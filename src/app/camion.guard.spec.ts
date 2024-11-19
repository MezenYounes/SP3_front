import { TestBed } from '@angular/core/testing';

import { camionGuard } from './camion.guard';

describe('ProjetGuard', () => {
  let guard: camionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(camionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});