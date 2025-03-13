import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLoginPanelComponent } from '@chmur-koty/ui-login-panel';
import { LoginEvent } from '@chmur-koty/util-types';
import { FeatureThemeSwitchComponent } from '@chmur-koty/feature-theme-switch';
import { FeatureLanguageSwitchComponent } from '@chmur-koty/feature-language-switch';

@Component({
  selector: 'lib-feature-login-page',
  imports: [CommonModule, UiLoginPanelComponent, FeatureThemeSwitchComponent, FeatureLanguageSwitchComponent],
  templateUrl: './feature-login-page.component.html',
  styleUrl: './feature-login-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureLoginPageComponent {
  protected isLogginIn$ = signal(false);

  protected async handleLoginEvent(loginEvent: LoginEvent) {
    /*TODO Impl login through service*/

    this.isLogginIn$.set(true);
    console.log(`Handled`, loginEvent);
  }
}
