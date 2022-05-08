import { Component } from '@angular/core';
import { TitleService } from '~/app/shared/services/title.service';
import { UiThemeService } from '@shared/services/ui-theme.service';

@Component({
  selector: 'wt-root',
  template: `
    <wt-navbar></wt-navbar>
    <mat-progress-bar *wtPreloader="0" mode="indeterminate" color="accent"></mat-progress-bar>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  constructor(
    private readonly titleService: TitleService,
    private readonly uiService: UiThemeService
  ) {
    uiService.UITheming().subscribe();
    titleService.onRouteChange().subscribe();
  }
}
