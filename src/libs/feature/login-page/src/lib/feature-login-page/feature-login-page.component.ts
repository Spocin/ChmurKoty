import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLoginPanelComponent } from '@chmur-koty/ui-login-panel';
import { LoginEvent } from '@chmur-koty/util-types';
import { FeatureThemeSwitchComponent } from '@chmur-koty/feature-theme-switch';
import { FeatureLanguageSwitchComponent } from '@chmur-koty/feature-language-switch';
import { AuthenticationService } from '@chmur-koty/data-access-authentication-service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-feature-login-page',
  imports: [CommonModule, UiLoginPanelComponent, FeatureThemeSwitchComponent, FeatureLanguageSwitchComponent],
  templateUrl: './feature-login-page.component.html',
  styleUrl: './feature-login-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureLoginPageComponent {
  private readonly authenticationService = inject(AuthenticationService);
  private readonly messageService = inject(MessageService);
  private readonly router = inject(Router);

  protected isLogginIn$ = signal(false);
  protected authenticationState = signal<boolean | undefined>(undefined);

  protected async handleLoginEvent(loginEvent: LoginEvent) {
    this.isLogginIn$.set(true);

    this.messageService.add({
      severity: 'secondary',
      summary: $localize`Note for an author`,
      detail: $localize`Delays are artificial to add feeling of real application :)`,
    });

    const result = await this.authenticationService.authenticateUser(loginEvent);

    if (result === true) {
      this.authenticationState.set(true);

      setTimeout(() => {
        void this.router.navigate(['home']);
      }, 500);
    } else if (result === false) {
      this.authenticationState.set(false);
    } else {
      this.authenticationState.set(undefined);
    }

    this.isLogginIn$.set(false);
  }
}
