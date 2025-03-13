import { inject, Injectable } from '@angular/core';
import { AuthenticationSettledResult, LoginEvent } from '@chmur-koty/util-types';
import { delay, firstValueFrom, map, Observable, of } from 'rxjs';
import { MessageService } from 'primeng/api';
import { APP_CONFIG } from '@chmur-koty/util-environment-config';

/**
 * Mocked user able to log in
 */
const userMock: LoginEvent = {
  email: 'test@test.pl',
  password: 'hireMe:)',
};

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly appConfig = inject(APP_CONFIG);
  private readonly messageService = inject(MessageService);

  public async authenticateUser(loginEvent: LoginEvent): Promise<boolean | undefined> {
    try {
      const res = await firstValueFrom(this.mockAuthenticationCheckOnBackend(loginEvent));

      if (res.success) {
        this.saveUserTokenToLocalStorage(res.token);

        return true;
      }

      return false;
    } catch (e) {
      console.error(e);

      this.messageService.add({
        severity: 'error',
        summary: 'AuthenticationService',
        detail: 'Could not authenticate',
      });

      return undefined;
    }
  }

  private mockAuthenticationCheckOnBackend(loginEvent: LoginEvent): Observable<AuthenticationSettledResult> {
    return of(loginEvent).pipe(
      delay(3000),
      map((loginEvent) => {
        if (JSON.stringify(userMock) === JSON.stringify(loginEvent)) {
          return {
            success: true,
            token: 'b29dcbae-95ee-4d47-b3b6-51073194d990',
          };
        } else {
          return {
            success: false,
          };
        }
      }),
    );
  }

  private saveUserTokenToLocalStorage(authenticationToken: string) {
    localStorage.setItem(this.appConfig.localStorageAuthenticationKey, authenticationToken);
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem(this.appConfig.localStorageAuthenticationKey);
  }
}
