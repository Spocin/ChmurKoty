import { effect, inject, Injectable, PLATFORM_ID, RendererFactory2, signal } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { APP_CONFIG } from '@chmur-koty/util-environment-config';

export const enum AppThemes {
  LIGHT = 'light',
  DARK = 'dark',
}

@Injectable({
  providedIn: 'root',
})
export class DataAccessThemesService {
  private readonly appConfig = inject(APP_CONFIG);
  private readonly dom = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly renderer = inject(RendererFactory2).createRenderer(null, null);

  private readonly _activeTheme$ = signal<AppThemes>(AppThemes.DARK);
  public readonly activeTheme$ = this._activeTheme$.asReadonly();

  constructor() {
    this.syncThemeFromLocalStorage();
    this.toggleClassOnThemeChanges();
  }

  private syncThemeFromLocalStorage() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this._activeTheme$.set(this.getStateFromLocalStorage() ?? AppThemes.LIGHT);
  }

  private toggleClassOnThemeChanges() {
    effect(() => {
      const theme = this.activeTheme$();

      switch (theme) {
        case AppThemes.DARK:
          this.renderer.addClass(this.dom.documentElement, this.appConfig.darkModeClassName);
          break;

        case AppThemes.LIGHT:
          if (this.dom.documentElement.className.includes(this.appConfig.darkModeClassName)) {
            this.renderer.removeClass(this.dom.documentElement, this.appConfig.darkModeClassName);
          }
          break;
      }
    });
  }

  public toggleTheme(): void {
    const newTheme = this.getStateFromLocalStorage() === AppThemes.DARK ? AppThemes.LIGHT : AppThemes.DARK;
    localStorage.setItem(this.appConfig.localStorageThemeKey, newTheme);
    this._activeTheme$.set(newTheme);
  }

  private getStateFromLocalStorage(): AppThemes | undefined {
    const storageTheme = localStorage.getItem(this.appConfig.localStorageThemeKey);

    if (storageTheme && this.isValidAppTheme(storageTheme)) {
      return storageTheme;
    }

    return undefined;
  }

  private isValidAppTheme(value: string): value is AppThemes {
    return value === AppThemes.LIGHT || value === AppThemes.DARK;
  }
}
