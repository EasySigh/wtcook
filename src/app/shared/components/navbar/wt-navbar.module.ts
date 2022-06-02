import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { WtNavbarComponent } from '@shared/components/navbar/component/wt-navbar.component';



@NgModule({
  declarations: [WtNavbarComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    RouterModule,
  ],
  exports: [WtNavbarComponent]
})
export class WtNavbarModule { }
