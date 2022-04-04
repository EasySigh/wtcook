import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { createUser } from '../../../store/actions/user.actions';
import { userSelector } from '../../../store/selectors/user.selector';

import { UserData } from '../../../models/interfaces/user';

@Component({
  selector: 'wt-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  public form: FormGroup;
  public user$: Observable<UserData> = this.store.select(userSelector);

  constructor(private store: Store) {
    this.form = this.formInit();
  }

  private formInit(): FormGroup {
    return new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.maxLength(30)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      pass: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  public get name(): AbstractControl {
    return this.form.get('name');
  }

  public get email(): AbstractControl {
    return this.form.get('email');
  }

  public get pass(): AbstractControl {
    return this.form.get('pass');
  }

  public submit(e): void {
    e.preventDefault();
    this.store.dispatch(createUser(this.form.value));
  }
}
