import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectButton, SelectButtonOptionClickEvent } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { AppLanguages, DataAccessLanguageService } from '@chmur-koty/data-access-language-service';

@Component({
  selector: 'lib-feature-language-switch',
  imports: [CommonModule, SelectButton, FormsModule],
  templateUrl: './feature-language-switch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureLanguageSwitchComponent {
  protected readonly languageService = inject(DataAccessLanguageService);

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

  protected changeLanguage(event: SelectButtonOptionClickEvent) {
    this.languageService.changeLanguage(event.option.value);
  }
}
