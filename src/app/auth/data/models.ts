import { LoginFormComponent } from '~/app/auth/components/login-form/login-form.component';
import { JoinFormComponent } from '~/app/auth/components/join-form/join-form.component';
import { ResetFormComponent } from '~/app/auth/components/reset-form/reset-form.component';

export enum FormType {
  LOGIN = 'login',
  JOIN = 'join',
  RESET = 'reset'
}

export type Viewer = LoginFormComponent | JoinFormComponent | ResetFormComponent;
