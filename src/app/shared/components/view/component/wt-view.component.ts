import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ViewData } from '@const';
import { Observable } from 'rxjs';

export interface ViewConfig {
  columns: (keyof ViewData)[],
  defaultView?: 'card' | 'list',
  itemsPerPage?: number,
  itemsLength$: Observable<number>
}

/**
 * @NOTE [viewConfig]="ViewConfig" input is required!
 */
@Component({
  selector: 'wt-view[viewConfig]',
  templateUrl: './wt-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WtViewComponent implements OnInit {
  @Input() public viewConfig!: ViewConfig;
  public view: string = 'card';

  ngOnInit() {
    this.view = this.viewConfig?.defaultView || this.view;
  }

  get isListView(): boolean {
    return this.view === 'list';
  }
}
