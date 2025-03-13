import { inject, Injectable, isDevMode, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, take } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export const enum AppLanguages {
  EN = 'en',
  PL = 'pl',
}

@Injectable({
  providedIn: 'root',
})
export class DataAccessLanguageServiceService {
  private readonly router = inject(Router);

  private readonly _activeLanguage$ = signal<AppLanguages | undefined>(undefined);
  public readonly activeLanguage$ = this._activeLanguage$.asReadonly();

  constructor() {
    if (isDevMode()) {
      /*Mock active language to EN in dev mode*/
      this._activeLanguage$.set(AppLanguages.EN);

      return;
    }

    this.computeLanguageBaseOnUrl();
  }

  private computeLanguageBaseOnUrl() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        take(1),
        takeUntilDestroyed(),
      )
      .subscribe(() => {
        const firstSegment = this.router.url.split('/').filter((s) => s)[0];

        if (this.isValidAppLanguage(firstSegment)) {
          this._activeLanguage$.set(firstSegment);
        } else {
          this._activeLanguage$.set(undefined);
        }
      });
  }

  private isValidAppLanguage(value: string): value is AppLanguages {
    return value === AppLanguages.EN || value === AppLanguages.PL;
  }
}
