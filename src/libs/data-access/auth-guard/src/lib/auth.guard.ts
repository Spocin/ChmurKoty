import { CanActivateFn, Router } from '@angular/router';
import { inject, makeStateKey, PLATFORM_ID, TransferState } from '@angular/core';
import { AuthenticationService } from '@chmur-koty/data-access-authentication-service';
import { isPlatformServer } from '@angular/common';

const IS_AUTHENTICATED = makeStateKey<boolean>('isAuthenticated');

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthenticationService);
  const transferState = inject(TransferState);
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  if (isPlatformServer(platformId)) {
    const isAuthenticated = authService.isAuthenticated();

    transferState.set(IS_AUTHENTICATED, isAuthenticated);

    return isAuthenticated;
  }

  const isSsrAuthenticated = transferState.get(IS_AUTHENTICATED, false);

  if (!isSsrAuthenticated) {
    if (authService.isAuthenticated()) {
      return true;
    }

    return router.parseUrl('login');
  }

  return true;
};
