import { Route } from '@angular/router';
import { authGuard } from '@chmur-koty/data-access-auth-guard';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    loadComponent: () => import('@chmur-koty/feature-login-page').then((m) => m.FeatureLoginPageComponent),
  },
  {
    path: 'home',
    loadComponent: () => import('@chmur-koty/feature-home-page').then((m) => m.FeatureHomePageComponent),
    canActivate: [authGuard],
  },
];
