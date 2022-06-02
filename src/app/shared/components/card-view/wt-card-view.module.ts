import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import { WtCardViewComponent } from '@shared/components/card-view/component/wt-card-view.component';



@NgModule({
  declarations: [WtCardViewComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule
  ],
  exports: [WtCardViewComponent]
})
export class WtCardViewModule { }
