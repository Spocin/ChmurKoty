import { TestBed } from '@angular/core/testing';

import { DataAccessLanguageService } from './data-access-language.service';

describe('DataAccessLanguageServiceService', () => {
  let service: DataAccessLanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataAccessLanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
