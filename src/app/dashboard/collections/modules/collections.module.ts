import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { NgxTippyModule } from 'ngx-tippy-wrapper';
import { WtViewModule } from '@shared/components';
import { WtCarouselModule } from '@shared/components';

import { CollectionsListComponent } from '../pages/collections-list/collections-list.component';
import { CollectionComponent } from '../pages/collection/collection.component';

import { COLLECTIONS_ROUTES } from '@dashboard/collections/modules/routes';
import { collectionsReducer } from '@store/dashboard/collections/collections.reducer';


@NgModule({
  declarations: [
    CollectionComponent,
    CollectionsListComponent
  ],
  imports: [
    CommonModule,
    WtViewModule,
    WtCarouselModule,
    NgxTippyModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    StoreModule.forFeature('collections', collectionsReducer),
    RouterModule.forChild(COLLECTIONS_ROUTES),
  ]
})
export class CollectionsModule { }
