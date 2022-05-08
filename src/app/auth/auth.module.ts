import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '~/app/shared';

import { AuthComponent } from './pages/auth/auth.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { JoinFormComponent } from './components/join-form/join-form.component';
import { ResetFormComponent } from './components/reset-form/reset-form.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginFormComponent,
    JoinFormComponent,
    ResetFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{
      path: '',
      children: [
        { path: '', pathMatch: 'full', redirectTo: '/auth/join' },
        { path: 'login', component: AuthComponent, data: {title: 'Вход', name: 'login'} },
        { path: 'join', component: AuthComponent, data: {title: 'Регистрация', name: 'join'} },
        { path: 'reset', component: AuthComponent, data: {title: 'Восстановление пароля', name: 'reset'} }
      ]}
    ]),
  ]
})
export class AuthModule { }
