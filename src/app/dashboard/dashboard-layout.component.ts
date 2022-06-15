import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TitleService } from '@shared/services/title.service';
import { dashboardRouteAnimation } from '@shared/utils/animations';

@Component({
  selector: 'wt-dashboard',
  template: `
    <header *ngIf="pageTitle$ | async; let title" class="mat-toolbar mat-primary px-2 py-3">{{title}}</header>
    <mat-progress-bar *wtPreloader="0" mode="indeterminate"></mat-progress-bar>
    <div class="container py-3" style="position: relative" [@fade]="outlet.isActivated ? outlet.activatedRoute : ''">
      <router-outlet #outlet="outlet"></router-outlet>
    </div>
  `,
  styles: [':host {--content-height: 195px} header {font-weight: lighter}'],
  animations: [dashboardRouteAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardLayoutComponent {
  public pageTitle$: Observable<string> = this.titleService.routeData$;
  constructor(public readonly titleService: TitleService) {}
}
