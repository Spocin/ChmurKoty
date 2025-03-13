import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataAccessThemesService } from '@chmur-koty/data-access-themes-service';
import { FormsModule } from '@angular/forms';
import { Toolbar } from 'primeng/toolbar';
import { PrimeTemplate } from 'primeng/api';
import { FeatureLanguageSwitchComponent } from '@chmur-koty/feature-language-switch';
import { FeatureThemeSwitchComponent } from '@chmur-koty/feature-theme-switch';
import { FeatureLogoutButtonComponent } from '@chmur-koty/feature-logout-button';

@Component({
  selector: 'lib-feature-home-page',
  imports: [
    CommonModule,
    FormsModule,
    Toolbar,
    PrimeTemplate,
    FeatureLanguageSwitchComponent,
    FeatureThemeSwitchComponent,
    FeatureLogoutButtonComponent,
  ],
  templateUrl: './feature-home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureHomePageComponent {
  protected readonly themesService = inject(DataAccessThemesService);

  protected resolveTheme() {
    this.themesService.toggleTheme();
  }
}
