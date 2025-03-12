import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-feature-theme-switch',
  imports: [CommonModule],
  templateUrl: './feature-theme-switch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureThemeSwitchComponent {}
