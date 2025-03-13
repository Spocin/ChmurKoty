import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectButton } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { AppLanguages, DataAccessLanguageServiceService } from '@chmur-koty/data-access-language-service';

@Component({
  selector: 'lib-feature-language-switch',
  imports: [CommonModule, SelectButton, FormsModule],
  templateUrl: './feature-language-switch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureLanguageSwitchComponent {
  protected readonly languageService = inject(DataAccessLanguageServiceService);

  protected languagesOpts = [
    {
      label: 'EN',
      value: AppLanguages.EN,
    },
    {
      label: 'PL',
      value: AppLanguages.PL,
    },
  ];
}
