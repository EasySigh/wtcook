import { InjectionToken } from '@angular/core';
import { FormType, Viewer } from '~/app/auth/data/models';

import { LoginFormComponent } from '../components/login-form/login-form.component';
import { JoinFormComponent } from '../components/join-form/join-form.component';
import { ResetFormComponent } from '../components/reset-form/reset-form.component';

export const FORMS = new InjectionToken<Map<FormType, Viewer>>('VIEWERS', {
  factory: () => {
    return new Map<FormType, any>([
      [FormType.LOGIN, LoginFormComponent],
      [FormType.JOIN, JoinFormComponent],
      [FormType.RESET, ResetFormComponent],
    ]);
  },
});
