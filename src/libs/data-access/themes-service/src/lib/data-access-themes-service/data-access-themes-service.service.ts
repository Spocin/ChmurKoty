import { inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export const enum AppThemes {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system',
}

@Injectable({
  providedIn: 'root',
})
export class DataAccessThemesServiceService {
  private readonly dom = inject(DOCUMENT);

  public resolveTheme() {
    const storageTheme = this.getStateFromLocalStorage();
    const isDarkThemePreferred =
      storageTheme === AppThemes.DARK ||
      (storageTheme === undefined && window.matchMedia(`(prefers-color-scheme: ${AppThemes.DARK})`).matches);

    this.dom.documentElement.classList.toggle('dark', isDarkThemePreferred);
  }

  private getStateFromLocalStorage(): AppThemes | undefined {
    const storageTheme = localStorage.getItem('theme');

    if (storageTheme && this.isValidAppTheme(storageTheme)) {
      return storageTheme;
    }

    return undefined;
  }

  private isValidAppTheme(value: string): value is AppThemes {
    return value === AppThemes.LIGHT || value === AppThemes.DARK || value === AppThemes.SYSTEM;
  }
}
