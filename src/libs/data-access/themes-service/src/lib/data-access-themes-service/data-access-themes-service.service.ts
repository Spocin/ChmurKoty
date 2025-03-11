import { effect, inject, Injectable, PLATFORM_ID, RendererFactory2, signal } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

export const enum AppThemes {
  LIGHT = 'light',
  DARK = 'dark',
}

@Injectable({
  providedIn: 'root',
})
export class DataAccessThemesServiceService {
  public static readonly darkModeClassName = 'app-dark';
  public static readonly localStorageThemeKey = 'app-theme';

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
          this.renderer.addClass(this.dom.documentElement, DataAccessThemesServiceService.darkModeClassName);
          break;

        case AppThemes.LIGHT:
          if (this.dom.documentElement.className.includes(DataAccessThemesServiceService.darkModeClassName)) {
            this.renderer.removeClass(this.dom.documentElement, DataAccessThemesServiceService.darkModeClassName);
          }
          break;
      }
    });
  }

  public toggleTheme(): void {
    const newTheme = this.getStateFromLocalStorage() === AppThemes.DARK ? AppThemes.LIGHT : AppThemes.DARK;
    localStorage.setItem(DataAccessThemesServiceService.localStorageThemeKey, newTheme);
    this._activeTheme$.set(newTheme);
  }

  private getStateFromLocalStorage(): AppThemes | undefined {
    const storageTheme = localStorage.getItem(DataAccessThemesServiceService.localStorageThemeKey);

    if (storageTheme && this.isValidAppTheme(storageTheme)) {
      return storageTheme;
    }

    return undefined;
  }

  private isValidAppTheme(value: string): value is AppThemes {
    return value === AppThemes.LIGHT || value === AppThemes.DARK;
  }
}
