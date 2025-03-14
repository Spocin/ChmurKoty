import { ChangeDetectionStrategy, Component, EventEmitter, input, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Toolbar } from 'primeng/toolbar';
import { PrimeTemplate } from 'primeng/api';
import { FeatureLanguageSwitchComponent } from '@chmur-koty/feature-language-switch';
import { FeatureThemeSwitchComponent } from '@chmur-koty/feature-theme-switch';
import { FeatureLogoutButtonComponent } from '@chmur-koty/feature-logout-button';
import { FeatureCatFactsScrollBoardComponent } from '@chmur-koty/feature-cat-facts-scroll-board';
import { Panel } from 'primeng/panel';
import { Button } from 'primeng/button';
import { Subject } from 'rxjs';

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
    FeatureCatFactsScrollBoardComponent,
    Panel,
    NgOptimizedImage,
    Button,
  ],
  templateUrl: './feature-home-page.component.html',
  styleUrl: './feature-home-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureHomePageComponent {
  protected scrollToTopToggle = signal(false);
}
