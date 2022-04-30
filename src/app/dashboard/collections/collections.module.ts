import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared';

import { LayoutComponent } from './layout/layout.component';
import { CollectionsListComponent } from './pages/collections-list/collections-list.component';
import { CollectionComponent } from './pages/collection/collection.component';


@NgModule({
  declarations: [
    LayoutComponent,
    CollectionsListComponent,
    CollectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: '', component: LayoutComponent, children: [
        {path: '', pathMatch: 'full', redirectTo: 'list'},
          {path: 'new', component: CollectionsListComponent, data: {title: 'Новая подборка'}},
          {path: 'list', component: CollectionsListComponent, data: {title: 'Мои коллекции'}},
          {path: 'list/:id', component: CollectionsListComponent, data: {title: '*Название подборки*'}},
          {path: 'edit/:id', component: CollectionsListComponent, data: {title: '*Название подборки*'}},
          {path: 'collection/:id', component: CollectionComponent, data: {title: '*Название подборки*'}},
      ]}
    ]),
  ]
})
export class CollectionsModule { }
