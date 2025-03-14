import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { ChmurKotyPreset } from '@chmur-koty/util-custom-prime-ng-presets';
import { MessageService } from 'primeng/api';
import { APP_CONFIG, environment } from '@chmur-koty/util-environment-config';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: ChmurKotyPreset,
        options: {
          darkModeSelector: `.${environment.darkModeClassName}`,
          cssLayer: {
            name: 'primeng',
            order: 'theme, base, primeng',
          },
        },
      },
    }),
    provideClientHydration(withEventReplay()),
    provideExperimentalZonelessChangeDetection(),
    provideRouter(appRoutes),
    MessageService,
    {
      provide: APP_CONFIG,
      useValue: environment,
    },
    provideHttpClient(withFetch()),
  ],
};
