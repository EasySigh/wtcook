import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export interface ViewData {
  id: string | number;
  title: string;
  description: string;
  menu: number[];
  createdAt: Date;
}

export const VIEW_DATA = new InjectionToken<Observable<ViewData[]>>('VIEW_DATA');
