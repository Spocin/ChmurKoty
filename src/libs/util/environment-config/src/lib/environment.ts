import { EnvironmentModel } from '@chmur-koty/util-types';

export const environment: EnvironmentModel = {
  darkModeClassName: 'app-dark',

  localStorageThemeKey: 'app-theme',
  authCookieName: 'app-auth-cookie',

  numberOfInitialFactsToLoad: 1,
  numberOfFactsToLoadOnScroll: 3,

  matchFactRetryCount: 5,
};
