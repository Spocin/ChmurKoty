import { inject, Injectable, PLATFORM_ID, REQUEST } from '@angular/core';
import { AuthenticationSettledResult, LoginEvent } from '@chmur-koty/util-types';
import { delay, firstValueFrom, map, Observable, of } from 'rxjs';
import { MessageService } from 'primeng/api';
import { APP_CONFIG } from '@chmur-koty/util-environment-config';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

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
  private readonly platformId = inject(PLATFORM_ID);
  private readonly request = inject(REQUEST, { optional: true });
  private readonly dom = inject(DOCUMENT);

  public async authenticateUser(loginEvent: LoginEvent): Promise<boolean | undefined> {
    try {
      const res = await firstValueFrom(this.mockAuthenticationCheckOnBackend(loginEvent));

      if (res.success) {
        this.saveUserTokenToCookie(res.token);

        return true;
      }

      return false;
    } catch (e) {
      console.error(e);

      this.messageService.add({
        severity: 'error',
        summary: 'AuthenticationService',
        detail: $localize`Could not authenticate`,
      });

      return undefined;
    }
  }

  private mockAuthenticationCheckOnBackend(loginEvent: LoginEvent): Observable<AuthenticationSettledResult> {
    return of(loginEvent).pipe(
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

  private saveUserTokenToCookie(authenticationToken: string) {
    this.dom.cookie = `${this.appConfig.authCookieName}=${authenticationToken}}; path=/`;
  }

  public isAuthenticated(): boolean {
    const authCookieRegExp = new RegExp(`(^| )${this.appConfig.authCookieName}=([^;]+)`);
    const authCookie = this.getCookies().match(authCookieRegExp);

    if (authCookie === null) {
      return false;
    }

    return decodeURIComponent(authCookie[1]) !== null;
  }

  private getCookies(): string {
    if (isPlatformBrowser(this.platformId)) {
      return this.dom.cookie;
    }

    return this.request?.headers.get('cookie') ?? '';
  }

  public removeAuthCookie() {
    this.dom.cookie = `${this.appConfig.authCookieName}=; path=/`;
  }
}
