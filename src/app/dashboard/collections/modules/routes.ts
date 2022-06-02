import { CollectionComponent } from '@dashboard/collections/pages/collection/collection.component';
import { CollectionsListComponent } from '@dashboard/collections/pages/collections-list/collections-list.component';
import { CollectionFormComponent } from '@dashboard/collections/pages/collection-form/collection-form.component';

export const COLLECTIONS_ROUTES = [
  {
    path: '',
    children: [
      {path: '', pathMatch: 'full', component: CollectionsListComponent, data: {title: 'Мои коллекции'}},
      {path: ':collection', component: CollectionComponent, data: {title: '*Название коллекции*'}},
    ]
  }
];

export const COLLECTIONS_FORM_ROUTES = [
  {
    path: '',
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'new'},
      {path: 'new', component: CollectionFormComponent, data: {title: 'Новая коллекция'}},
      {path: 'edit/:id', component: CollectionFormComponent, data: {title: 'Редактирование'}}
    ]
  }
];
