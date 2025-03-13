import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataAccessThemesService } from '@chmur-koty/data-access-themes-service';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-feature-home-page',
  imports: [CommonModule, ToggleSwitch, FormsModule],
  templateUrl: './feature-home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureHomePageComponent {
  protected readonly themesService = inject(DataAccessThemesService);

  protected resolveTheme() {
    this.themesService.toggleTheme();
  }
}
