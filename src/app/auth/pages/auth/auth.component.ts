import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, UrlSegment } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'wt-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  public form: FormGroup;
  public readonly routeData: Observable<Data> = this.route.data;
  public readonly isJoinPage: Observable<boolean> = this.route.url.pipe(
    map((url: UrlSegment[]) => url[0].path === 'join')
  );

  constructor(private readonly route: ActivatedRoute) {
    this.form = AuthComponent.formInit();
  }

  ngOnInit(): void {
    if (this.route.snapshot.routeConfig.path === 'join') {
      this.form.addControl('name', new FormControl(null,
        [Validators.required, Validators.maxLength(50)]
      ));
      this.form.setControl('pass', new FormControl(null,
        [Validators.required, Validators.minLength(6)]
      ));
    }
  }

  private static formInit(): FormGroup {
    return new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      pass: new FormControl(null, [Validators.required])
    });
  }

  public submit(e): void {
    e.preventDefault();
  }

  public get email(): AbstractControl {
    return this.form.get('email');
  }

  public get pass(): AbstractControl {
    return this.form.get('pass');
  }
}
