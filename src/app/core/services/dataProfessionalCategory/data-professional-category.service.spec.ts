import { TestBed } from '@angular/core/testing';

import { DataProfessionalCategoryService } from './data-professional-category.service';

describe('DataProfessionalCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataProfessionalCategoryService = TestBed.get(DataProfessionalCategoryService);
    expect(service).toBeTruthy();
  });
});
