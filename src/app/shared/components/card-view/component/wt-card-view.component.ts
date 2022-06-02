import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { VIEW_DATA, ViewData } from '@const';

@Component({
  selector: 'wt-card-view',
  templateUrl: './wt-card-view.component.html',
  styleUrls: ['./wt-card-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WtCardViewComponent<T extends ViewData> {
  constructor(@Inject(VIEW_DATA) public items$: Observable<T[]>) {}

  public itemId(index, item): number | string {
    return item?.id || index;
  }
}
