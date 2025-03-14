import { TestBed } from '@angular/core/testing';
import { FeatureCatFactsScrollBoardComponent } from './feature-cat-facts-scroll-board.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { MockProvider } from 'ng-mocks';
import { MessageService } from 'primeng/api';
import { CatFactsService } from '@chmur-koty/data-access-cat-facts-service';
import { APP_CONFIG } from '@chmur-koty/util-environment-config';

describe('FeatureCatFactsScrollBoardComponent', () => {
  let component: FeatureCatFactsScrollBoardComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FeatureCatFactsScrollBoardComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        MockProvider(MessageService),
        MockProvider(CatFactsService),
        MockProvider(APP_CONFIG),
      ],
    });

    TestBed.runInInjectionContext(() => {
      component = new FeatureCatFactsScrollBoardComponent();
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
