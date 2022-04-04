import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeLayoutComponent } from './home/layout/home-layout.component';
import { HomePageComponent } from './home/home-page/home-page.component';

const routes: Routes = [
  {path: '', component: HomeLayoutComponent, children: [
      {path: '', pathMatch: 'full', redirectTo: '/'},
      {path: '', component: HomePageComponent, data: {title: 'Кухня'}}
  ]},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
