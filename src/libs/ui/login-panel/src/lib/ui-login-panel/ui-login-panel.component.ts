import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-ui-login-panel',
  imports: [CommonModule],
  templateUrl: './ui-login-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiLoginPanelComponent {}
