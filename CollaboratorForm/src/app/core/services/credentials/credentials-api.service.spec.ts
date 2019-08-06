import { TestBed } from '@angular/core/testing';

import { CredentialsApiService } from './credentials-api.service';

describe('CredentialsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CredentialsApiService = TestBed.get(CredentialsApiService);
    expect(service).toBeTruthy();
  });
});
