import { InjectionToken } from '@angular/core';
import { EnvironmentModel } from '@chmur-koty/util-types';

export const APP_CONFIG = new InjectionToken<EnvironmentModel>('Application config');
