import { TestBed } from '@angular/core/testing';
import { FeatureLogoutButtonComponent } from './feature-logout-button.component';
import { MockProvider } from 'ng-mocks';
import { AuthenticationService } from '@chmur-koty/data-access-authentication-service';
import { MessageService } from 'primeng/api';

describe('FeatureLogoutButtonComponent', () => {
  let component: FeatureLogoutButtonComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FeatureLogoutButtonComponent],
      providers: [MockProvider(AuthenticationService), MockProvider(MessageService)],
    });

    TestBed.runInInjectionContext(() => {
      component = new FeatureLogoutButtonComponent();
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
