import { TestBed } from '@angular/core/testing';

import { CatFactsService } from './cat-facts.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { MockProvider } from 'ng-mocks';
import { MessageService } from 'primeng/api';

describe('CatFactsService', () => {
  let service: CatFactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting(), MockProvider(MessageService)],
    });
    service = TestBed.inject(CatFactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
