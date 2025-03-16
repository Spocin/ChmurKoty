import { TestBed } from '@angular/core/testing';

import { CatFactsService } from './cat-facts.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { MockProvider } from 'ng-mocks';
import { MessageService } from 'primeng/api';
import { APP_CONFIG } from '@chmur-koty/util-environment-config';

describe('CatFactsService', () => {
  let service: CatFactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        MockProvider(MessageService),
        MockProvider(APP_CONFIG),
      ],
    });
    service = TestBed.inject(CatFactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
