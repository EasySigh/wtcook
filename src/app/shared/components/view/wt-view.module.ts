import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { WtCardViewModule } from '@shared/components/card-view/wt-card-view.module';
import { WtListViewModule } from '@shared/components/list-view/wt-list-view.module';
import { WtPreloaderModule } from '@shared/directives';

import { WtViewComponent } from '@shared/components/view/component/wt-view.component';


@NgModule({
  declarations: [
    WtViewComponent,
  ],
  imports: [
    CommonModule,
    WtListViewModule,
    WtCardViewModule,
    WtPreloaderModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  exports: [
    WtViewComponent,
    WtListViewModule
  ]
})
export class WtViewModule { }
