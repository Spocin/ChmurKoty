import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '@chmur-koty/data-access-authentication-service';
import { Router } from '@angular/router';
import { Button } from 'primeng/button';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'lib-feature-logout-button',
  imports: [CommonModule, Button],
  templateUrl: './feature-logout-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureLogoutButtonComponent {
  private readonly authService = inject(AuthenticationService);
  private readonly router = inject(Router);
  private readonly messageService = inject(MessageService);

  protected logoutUser() {
    this.authService.removeAuthCookie();
    void this.router.navigate(['/login']);

    this.messageService.add({
      summary: $localize`Auth`,
      detail: $localize`Successfully logged out`,
    });
  }
}
