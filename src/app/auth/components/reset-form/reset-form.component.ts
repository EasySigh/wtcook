import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'wt-reset-form',
  templateUrl: './reset-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResetFormComponent {
  public email: string = '';

  constructor(private readonly _snackbar: MatSnackBar) { }

  public submit(): void {
    if (!this.email.trim().length) return;
    this.showSnackBar('Письмо было отправлено вам на почту ✔');
  }

  private showSnackBar(message, action?, duration = 5000): Observable<void> {
    const snackBarRef = this._snackbar.open(
      message,
      action,
      {duration}
    );

    return snackBarRef.onAction().pipe(take(1));
  }
}
