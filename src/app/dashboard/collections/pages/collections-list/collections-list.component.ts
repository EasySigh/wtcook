import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { selectCollectionEntities, selectCollectionTotal } from '@store/dashboard/collections/collections.selectors';
import { Collection } from '@shared/data/models';
import { ViewConfig } from '@shared/components/view/component/wt-view.component';
import { VIEW_DATA } from '@const';

@Component({
  selector: 'wt-collections-list',
  templateUrl: './collections-list.component.html',
  providers: [
    {
      provide: VIEW_DATA,
      useFactory:(store): Observable<Collection[]> =>
        store.select(selectCollectionEntities)
          .pipe( map(dictionary => Object.values(dictionary)) ),
      deps: [Store]
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionsListComponent {
  public config: ViewConfig = {
    defaultView: 'list',
    itemsPerPage: 10,
    itemsLength$: this.store.select(selectCollectionTotal),
    columns: ['title', 'description', 'createdAt']
  };

  constructor(private readonly store: Store) {}
}
