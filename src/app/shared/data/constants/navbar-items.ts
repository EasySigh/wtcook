import { InjectionToken } from '@angular/core';
import { UserRight } from '~/app/shared/data/models/user';
import { APP_ROUTES } from '~/app/shared/data/constants/app-routes';

export const NAVBAR_ITEMS = new InjectionToken<any[]>('NAVBAR_ITEMS', {
  providedIn: 'root',
  factory: () => {
    // @TODO needs to get data from the store
    const userRole: number = UserRight[localStorage.getItem('role')?.toUpperCase()] || 0;
    return APP_ROUTES.filter(item => userRole & item.role);
  }
});

