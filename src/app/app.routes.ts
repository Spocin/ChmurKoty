import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    loadComponent: () => import('@chmur-koty/feature-login-page').then(m => m.FeatureLoginPageComponent),
  }
];
