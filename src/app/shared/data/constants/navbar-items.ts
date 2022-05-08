import { inject, InjectionToken } from '@angular/core';
import { map, Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectFilter } from '@appState/appState.selectors';

import { NavbarRoute } from '@shared/data/models';
import { APP_ROUTES } from './app-routes';


export const NAVBAR_ITEMS = new InjectionToken<Observable<NavbarRoute[]>>('NAVBAR_ITEMS', {
  providedIn: 'root',
  factory: () => {
    const availableRoutes$ = inject(Store).select('appState');
    return availableRoutes$.pipe(
        select(selectFilter),
        map(filter => APP_ROUTES.filter(item => filter ? filter & item.access : !item.access))
      );
  }
});
