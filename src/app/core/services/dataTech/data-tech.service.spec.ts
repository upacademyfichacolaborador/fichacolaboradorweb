import { TestBed } from '@angular/core/testing';

import { DataTechService } from './data-tech.service';

describe('DataTechService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataTechService = TestBed.get(DataTechService);
    expect(service).toBeTruthy();
  });
});
