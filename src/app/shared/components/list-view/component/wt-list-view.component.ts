import { ChangeDetectionStrategy, Component, Inject, Input, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { VIEW_DATA, ViewData } from '@const';
import { WtListDetailsService } from '@shared/components/list-view/wt-list-details.service';
import { NullAble } from '@shared/data/models';

@Component({
  selector: 'wt-list-view',
  templateUrl: './wt-list-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class WtListViewComponent<T extends ViewData> {
  @Input() columns!: (keyof T)[];
  public expandedItem: NullAble<T>;
  public detailsTemplate$: Observable<TemplateRef<any>> | null;

  constructor(
    @Inject(VIEW_DATA) public items$: Observable<T[]>,
    private readonly listDetailsService: WtListDetailsService
  ) {
    this.detailsTemplate$ = listDetailsService.tpl$;
  }

  public itemId(index, item): number | string {
    return item?.id || index;
  }
}
