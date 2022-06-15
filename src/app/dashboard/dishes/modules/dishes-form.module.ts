import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DISHES_FORM_ROUTES } from '@dashboard/dishes/modules/routes';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(DISHES_FORM_ROUTES)
  ]
})
export class DishesFormModule { }
