import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared';

import { LayoutComponent } from './layout/layout.component';
import { AuthComponent } from './pages/auth/auth.component';

@NgModule({
  declarations: [
    LayoutComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{
      path: '',
      children: [
        { path: '', pathMatch: 'full', redirectTo: '/auth/join' },
        { path: 'login', component: AuthComponent, data: {title: 'Вход'} },
        { path: 'join', component: AuthComponent, data: {title: 'Регистрация'} },
        { path: 'reset', component: AuthComponent, data: {title: 'Восстановление пароля'} }
      ]}
    ]),
  ]
})
export class AuthModule { }
