import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';

import { NAVBAR_ITEMS } from '@const';
import { NavbarRoute } from '@shared/data/models';
import { UiThemeService } from '@shared/services/ui-theme.service';

@Component({
  selector: 'wt-navbar',
  templateUrl: './wt-navbar.component.html',
  styles: [':host {position: fixed; width: 100%; top: 0; z-index: 1;}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WtNavbarComponent {
  constructor(
    @Inject(NAVBAR_ITEMS) public readonly items$: Observable<NavbarRoute[]>,
    private readonly themeService: UiThemeService
  ) {}

  public setTheme(): void {
    this.themeService.updateTheme();
  }

  public trackRoute(index, route: NavbarRoute): string {
    return route.id;
  }
}
