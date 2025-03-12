import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-feature-language-switch',
  imports: [CommonModule],
  templateUrl: './feature-language-switch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureLanguageSwitchComponent {}
