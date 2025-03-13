import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { redirectToAppWhenAuthenticatedGuard } from './redirect-to-app-when-authenticated.guard';
import { MockProvider } from 'ng-mocks';
import { AuthenticationService } from '@chmur-koty/data-access-authentication-service';
import { MessageService } from 'primeng/api';

describe('redirectToAppWhenAuthenticatedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => redirectToAppWhenAuthenticatedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockProvider(AuthenticationService), MockProvider(MessageService)],
    });
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
