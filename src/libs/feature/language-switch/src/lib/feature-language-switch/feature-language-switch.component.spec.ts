import { TestBed } from '@angular/core/testing';
import { FeatureLanguageSwitchComponent } from './feature-language-switch.component';
import { MockProvider } from 'ng-mocks';
import { MessageService } from 'primeng/api';

describe('FeatureLanguageSwitchComponent', () => {
  let component: FeatureLanguageSwitchComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FeatureLanguageSwitchComponent],
      providers: [MockProvider(MessageService)],
    });

    TestBed.runInInjectionContext(() => {
      component = new FeatureLanguageSwitchComponent();
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
