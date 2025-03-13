import { TestBed } from '@angular/core/testing';

import { DataAccessLanguageServiceService } from './data-access-language-service.service';

describe('DataAccessLanguageServiceService', () => {
  let service: DataAccessLanguageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataAccessLanguageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
