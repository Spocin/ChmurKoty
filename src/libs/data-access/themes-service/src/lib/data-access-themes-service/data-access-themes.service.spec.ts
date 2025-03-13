import { TestBed } from '@angular/core/testing';

import { DataAccessThemesService } from './data-access-themes.service';
import { APP_CONFIG, environment } from '@chmur-koty/util-environment-config';

describe('ThemesServiceService', () => {
  let service: DataAccessThemesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: APP_CONFIG,
          useValue: environment,
        },
      ],
    });
    service = TestBed.inject(DataAccessThemesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
