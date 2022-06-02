import { Directive, OnDestroy, TemplateRef } from '@angular/core';
import { WtListDetailsService } from '@shared/components/list-view/wt-list-details.service';

@Directive({
  selector: '[wtListViewDetails]'
})
export class WtListDetailsDirective implements OnDestroy {
  constructor(readonly tpl: TemplateRef<any>, private readonly detailsService: WtListDetailsService) {
    this.detailsService.tpl = tpl;
  }

  ngOnDestroy(): void {
    this.detailsService.clear();
  }
}
