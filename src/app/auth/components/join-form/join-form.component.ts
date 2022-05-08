import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'wt-join-form',
  templateUrl: './join-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JoinFormComponent {
  public form: FormGroup;

  constructor() {
    this.form = new FormBuilder().group({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  public submit(): void {
    if (!this.form.valid) return;
  }
}
