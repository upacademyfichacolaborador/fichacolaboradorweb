import { TestBed } from '@angular/core/testing';

import { DataPostalCodeService } from './data-postal-code.service';

describe('DataPostalCodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataPostalCodeService = TestBed.get(DataPostalCodeService);
    expect(service).toBeTruthy();
  });
});
