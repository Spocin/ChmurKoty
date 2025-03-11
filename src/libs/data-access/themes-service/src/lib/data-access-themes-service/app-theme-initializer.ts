import { afterNextRender, inject } from '@angular/core';
import { DataAccessThemesServiceService } from './data-access-themes-service.service';

export function appThemeInitializer(): void {
  const themesService = inject(DataAccessThemesServiceService);

  afterNextRender(() => {
    themesService.resolveTheme();
  });
}
