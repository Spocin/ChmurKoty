import { TestBed } from '@angular/core/testing';

import { DataAccessThemesServiceService } from './data-access-themes-service.service';

describe('ThemesServiceService', () => {
  let service: DataAccessThemesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataAccessThemesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
