import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortalModule } from '@angular/cdk/portal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AuthComponent } from './pages/auth/auth.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { JoinFormComponent } from './components/join-form/join-form.component';
import { ResetFormComponent } from './components/reset-form/reset-form.component';

import { WtPreloaderModule } from '@shared/directives';
import { FormType } from '~/app/auth/data/models';

@NgModule({
  declarations: [
    AuthComponent,
    LoginFormComponent,
    JoinFormComponent,
    ResetFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PortalModule,
    WtPreloaderModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild([{
      path: '',
      children: [
        { path: '', pathMatch: 'full', redirectTo: '/auth/join' },
        { path: 'login', component: AuthComponent, data: {title: 'Вход', name: FormType.LOGIN} },
        { path: 'join', component: AuthComponent, data: {title: 'Регистрация', name: FormType.JOIN} },
        { path: 'reset', component: AuthComponent, data: {title: 'Восстановление пароля', name: FormType.RESET} }
      ]}
    ]),
  ]
})
export class AuthModule { }
