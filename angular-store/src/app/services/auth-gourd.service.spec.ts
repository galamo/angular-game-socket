import { TestBed } from '@angular/core/testing';

import { AuthGourdService } from './auth-gourd.service';

describe('AuthGourdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthGourdService = TestBed.get(AuthGourdService);
    expect(service).toBeTruthy();
  });
});
