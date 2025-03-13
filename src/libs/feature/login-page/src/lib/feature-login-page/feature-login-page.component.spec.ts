import { TestBed } from '@angular/core/testing';
import { FeatureLoginPageComponent } from './feature-login-page.component';
import { MockProvider } from 'ng-mocks';
import { AuthenticationService } from '@chmur-koty/data-access-authentication-service';
import { MessageService } from 'primeng/api';

describe('FeatureLoginPageComponent', () => {
  let component: FeatureLoginPageComponent;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [FeatureLoginPageComponent],
      providers: [MockProvider(AuthenticationService), MockProvider(MessageService)],
    });

    TestBed.runInInjectionContext(() => {
      component = new FeatureLoginPageComponent();
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
