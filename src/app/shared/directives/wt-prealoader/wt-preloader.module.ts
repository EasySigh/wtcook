import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WtPreloaderDirective } from './preloader-controller.directive';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@NgModule({
  declarations: [WtPreloaderDirective],
  providers: [],
  imports: [
    CommonModule,
    MatProgressBarModule
  ],
  exports: [
    MatProgressBarModule,
    WtPreloaderDirective
  ]
})
export class WtPreloaderModule { }
