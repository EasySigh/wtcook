import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleService } from '@shared/services/title.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'wt-dashboard',
  template: `
    <header *ngIf="pageTitle$ | async; let title" class="mat-toolbar mat-primary px-2 py-3">{{title}}</header>
    <mat-progress-bar *wtPreloader="0" mode="indeterminate"></mat-progress-bar>
    <div class="container py-3"><router-outlet></router-outlet></div>
  `,
  styles: [':host {--content-height: 195px;} header {font-weight: lighter;}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardLayoutComponent {
  public pageTitle$: Observable<string> = this.titleService.routeData$;
  constructor(public readonly titleService: TitleService) {}
}
