import { TestBed } from '@angular/core/testing';

import { DeactivateGourdService } from './deactivate-gourd.service';

describe('DeactivateGourdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeactivateGourdService = TestBed.get(DeactivateGourdService);
    expect(service).toBeTruthy();
  });
});
