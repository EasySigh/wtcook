import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CollectionFormComponent } from '../pages/collection-form/collection-form.component';
import { COLLECTIONS_FORM_ROUTES } from '@dashboard/collections/modules/routes';


@NgModule({
  declarations: [CollectionFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(COLLECTIONS_FORM_ROUTES)
  ]
})
export class CollectionsFormModule { }
