import { TestBed } from '@angular/core/testing';

import { DatadistrictService } from './datadistrict.service';

describe('DatadistrictService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatadistrictService = TestBed.get(DatadistrictService);
    expect(service).toBeTruthy();
  });
});
