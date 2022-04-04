import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


import { AuthLayoutComponent } from './layout/authLayout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: AuthLayoutComponent, children: [
          {path: '', pathMatch: 'full', redirectTo: '/auth/join'},
          {path: 'login', component: LoginComponent, data: {title: 'Вход'}},
          {path: 'join', component: RegisterComponent, data: {title: 'Регистрация'}}
        ]
      }
    ]),
  ]
})
export class AuthModule { }
