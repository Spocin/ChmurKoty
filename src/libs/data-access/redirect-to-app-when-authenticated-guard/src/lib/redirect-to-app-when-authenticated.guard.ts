import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthenticationService } from '@chmur-koty/data-access-authentication-service';
import { MessageService } from 'primeng/api';

export const redirectToAppWhenAuthenticatedGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authService = inject(AuthenticationService);
  const messageService = inject(MessageService);

  if (authService.isAuthenticated()) {
    void router.navigate(['/home']);

    messageService.add({
      severity: 'secondary',
      summary: $localize`Redirected`,
      detail: $localize`Already logged in. Redirected to app`,
    });

    return false;
  }

  return true;
};
