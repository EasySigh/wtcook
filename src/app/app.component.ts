import { Component } from '@angular/core';
import { TitleService } from '~/app/shared/services/title.service';
import { UiThemeService } from '@shared/services/ui-theme.service';

@Component({
  selector: 'wt-root',
  template: `
    <wt-navbar></wt-navbar>
    <div style="height: 64px;"></div>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  constructor(
    private readonly titleService: TitleService,
    private readonly uiService: UiThemeService
  ) {
    uiService.UITheming().subscribe();
    titleService.displayCurrentTitle().subscribe();
  }
}
