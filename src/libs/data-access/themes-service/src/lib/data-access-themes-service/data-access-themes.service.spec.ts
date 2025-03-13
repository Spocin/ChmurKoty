import { TestBed } from '@angular/core/testing';

import { DataAccessThemesService } from './data-access-themes.service';

describe('ThemesServiceService', () => {
  let service: DataAccessThemesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataAccessThemesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
