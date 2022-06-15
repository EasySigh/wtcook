import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { DISHES_ROUTES } from '@dashboard/dishes/modules/routes';
import { dishesReducer } from '@store/dashboard/dishes/dishes.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(DISHES_ROUTES),
    StoreModule.forFeature('dishes', dishesReducer),
  ]
})
export class DishesModule { }
