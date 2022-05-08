import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';

import { NAVBAR_ITEMS } from '@const';
import { NavbarRoute } from '@shared/data/models';
import { UiThemeService } from '@shared/services/ui-theme.service';

@Component({
  selector: 'wt-navbar',
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  constructor(
    @Inject(NAVBAR_ITEMS) public readonly items$: Observable<NavbarRoute[]>,
    private readonly themeService: UiThemeService
  ) {}

  public setTheme(): void {
    this.themeService.setTheme();
  }
}
