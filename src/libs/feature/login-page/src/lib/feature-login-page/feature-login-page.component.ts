import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-feature-login-page',
  imports: [CommonModule],
  templateUrl: './feature-login-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureLoginPageComponent {}
