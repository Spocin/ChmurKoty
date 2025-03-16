import { EnvironmentModel } from '@chmur-koty/util-types';

export const environment: EnvironmentModel = {
  darkModeClassName: 'app-dark',

  localStorageThemeKey: 'app-theme',
  authCookieName: 'app-auth-cookie',

  numberOfInitialFactsToLoad: 5,
  numberOfFactsToLoadOnScroll: 3,
  scrollLoadMoreDebounceTime: 100,

  matchFactRetryCount: 5,
};
