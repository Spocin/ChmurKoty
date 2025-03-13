import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { MockProvider } from 'ng-mocks';
import { MessageService } from 'primeng/api';
import { APP_CONFIG } from '@chmur-koty/util-environment-config';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockProvider(MessageService), MockProvider(APP_CONFIG)],
    });
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
