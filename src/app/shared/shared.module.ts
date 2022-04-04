import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MenubarModule } from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MenubarModule,
    TabViewModule,
    InputTextModule,
    CardModule
  ],
  exports: [
    MenubarModule,
    TabViewModule,
    NavbarComponent,
    InputTextModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
