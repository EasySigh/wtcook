import { CollectionComponent } from '@dashboard/collections/pages/collection/collection.component';
import { CollectionsListComponent } from '@dashboard/collections/pages/collections-list/collections-list.component';
import { CollectionFormComponent } from '@dashboard/collections/pages/collection-form/collection-form.component';

export const DISHES_ROUTES = [
  {
    path: '',
    children: [
      {path: '', pathMatch: 'full', component: CollectionsListComponent, data: {title: 'Мои Рецепты'}},
      {path: ':id', component: CollectionComponent, data: {title: '*Название блюда*'}},
    ]
  }
];

export const DISHES_FORM_ROUTES = [
  {
    path: '',
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'new'},
      {path: 'new', component: CollectionFormComponent, data: {title: 'Новый рецепт'}},
      {path: 'edit/:id', component: CollectionFormComponent, data: {title: 'Редактирование'}}
    ]
  }
];
