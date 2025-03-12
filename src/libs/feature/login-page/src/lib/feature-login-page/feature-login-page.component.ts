import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLoginPanelComponent } from '@chmur-koty/ui-login-panel';

@Component({
  selector: 'lib-feature-login-page',
  imports: [CommonModule, UiLoginPanelComponent],
  templateUrl: './feature-login-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host {
        @apply flex items-center justify-center w-full h-screen;
      }
    `,
  ],
})
export class FeatureLoginPageComponent {}
