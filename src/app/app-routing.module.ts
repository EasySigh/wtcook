import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { WtPreloaderModule } from '@shared/directives';
import { HomePageComponent } from './home/home-page/home-page.component';
import { DashboardLayoutComponent } from '@dashboard/dashboard-layout.component';

const routes: Routes = [
  { path: '', children: [
      {path: '', pathMatch: 'full', redirectTo: '/'},
      {path: '', component: HomePageComponent, data: {title: 'Кухня'}}
  ]},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'dashboard', component: DashboardLayoutComponent, children: [
    {path: '', pathMatch: 'full', redirectTo: 'collections'},
    {path: 'collections', loadChildren: () => import('@dashboard/collections/modules/collections.module').then(m => m.CollectionsModule)},
    {path: 'collection', loadChildren: () => import('./dashboard/collections/modules/collections-form.module').then(m => m.CollectionsFormModule)},
    {path: 'profile', loadChildren: () => import('./dashboard/profile/profile.module').then(m => m.ProfileModule)},
    {path: 'dishes', loadChildren: () => import('./dashboard/dishes/dishes.module').then(m => m.DishesModule)},
    {path: 'public', loadChildren: () => import('./dashboard/public/public.module').then(m => m.PublicModule)},
    {path: 'statistics', loadChildren: () => import('./dashboard/statistics/statistics.module').then(m => m.StatisticsModule)}
  ]},
];

@NgModule({
  declarations: [DashboardLayoutComponent],
  imports: [CommonModule, WtPreloaderModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
