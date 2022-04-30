import { Component } from '@angular/core';
import { TitleService } from '~/app/shared/services/title.service';

@Component({
  selector: 'wt-root',
  template: '<div class="wrapper"><router-outlet></router-outlet></div>',
})
export class AppComponent {
  constructor(private readonly titleService: TitleService) {
    titleService.setRouteTitle();
  }
}
