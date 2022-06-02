import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WtCarouselComponent } from './component/wt-carousel.component';
import { WtCarouselItemDirective } from './wt-carousel-item.directive';
import { WtGetStylesPipe } from './wt-get-styles.pipe';



@NgModule({
  declarations: [
    WtCarouselComponent,
    WtCarouselItemDirective,
    WtGetStylesPipe
  ],
  exports: [
    WtCarouselComponent,
    WtCarouselItemDirective
  ],
  imports: [
    CommonModule
  ]
})
export class WtCarouselModule { }
