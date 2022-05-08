import { AfterViewInit, ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { ComponentPortal, Portal } from '@angular/cdk/portal';
import { ActivatedRoute, Data } from '@angular/router';
import { FORMS } from '~/app/auth/data/constants';

@Component({
  selector: 'wt-auth',
  templateUrl: './auth.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit {
  public selectedView: Portal<any>;
  public readonly routeData: Data = this.route.snapshot.data;

  constructor(
    private readonly route: ActivatedRoute,
    @Inject(FORMS) private readonly forms
  ) {}

  ngOnInit() {
    this.selectedView = new ComponentPortal(this.forms.get(this.routeData.name));
  }
}
