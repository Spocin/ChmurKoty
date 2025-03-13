import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppThemes, DataAccessThemesService } from '@chmur-koty/data-access-themes-service';
import { SelectButton } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-feature-theme-switch',
  imports: [CommonModule, SelectButton, FormsModule],
  templateUrl: './feature-theme-switch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureThemeSwitchComponent {
  protected readonly themesService = inject(DataAccessThemesService);

  protected themesOpts = [
    {
      label: 'Light',
      value: AppThemes.LIGHT,
    },
    {
      label: 'Dark',
      value: AppThemes.DARK,
    },
  ];

  protected toggleTheme() {
    this.themesService.toggleTheme();
  }
}
