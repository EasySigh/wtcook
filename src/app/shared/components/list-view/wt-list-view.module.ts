import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { WtListViewComponent } from '@shared/components/list-view/component/wt-list-view.component';
import { WtListDetailsDirective } from './wt-list-details.directive';
import { WtListDetailsService } from '@shared/components/list-view/wt-list-details.service';


@NgModule({
  declarations: [
    WtListViewComponent,
    WtListDetailsDirective
  ],
  providers: [
    {provide: WtListDetailsService}
  ],
  imports: [
    CommonModule,
    MatTableModule,
  ],
  exports: [
    WtListViewComponent,
    WtListDetailsDirective
  ]
})
export class WtListViewModule { }
