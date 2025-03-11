import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-feature-home-page',
  imports: [CommonModule],
  templateUrl: './feature-home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureHomePageComponent {}
