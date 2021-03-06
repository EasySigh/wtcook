import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { ActivatedRoute, Data } from '@angular/router';
import { FORMS } from '~/app/auth/data/constants';

@Component({
  selector: 'wt-auth',
  templateUrl: './auth.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit {
  public selectedView: ComponentPortal<any>;
  public readonly routeData: Data = this.route.snapshot.data;

  constructor(
    private readonly route: ActivatedRoute,
    @Inject(FORMS) private readonly forms
  ) {}

  ngOnInit() {
    this.selectedView = new ComponentPortal(this.forms.get(this.routeData.name));
  }
}
// @TODO remove MatCardmodule and make in with plain HTML
