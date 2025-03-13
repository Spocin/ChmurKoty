import { TestBed } from '@angular/core/testing';

import { DataAccessLanguageService } from './data-access-language.service';
import { MockProvider } from 'ng-mocks';
import { MessageService } from 'primeng/api';

describe('DataAccessLanguageServiceService', () => {
  let service: DataAccessLanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockProvider(MessageService)],
    });
    service = TestBed.inject(DataAccessLanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
