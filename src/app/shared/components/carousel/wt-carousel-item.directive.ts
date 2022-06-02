import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[wtCarouselItem]'
})
export class WtCarouselItemDirective {
  constructor(public readonly tpl: TemplateRef<any>) { }
}
