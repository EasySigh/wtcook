import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SHARED_COMPONENTS } from './components';


@NgModule({
  declarations: [
    ...SHARED_COMPONENTS
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    ...SHARED_COMPONENTS
  ]
})
export class SharedModule { }
