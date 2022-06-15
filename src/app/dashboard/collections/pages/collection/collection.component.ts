import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCurrentCollection } from '@store/dashboard/collections/collections.selectors';
import { setCurrentCollectionId } from '@store/dashboard/collections/collections.actions';
import { memoize } from '@shared/utils';
import { Collection } from '@shared/data/models';
import { NgxTippyProps } from 'ngx-tippy-wrapper';

@Component({
  selector: 'wt-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionComponent implements OnDestroy {
  public readonly tippyConfig: NgxTippyProps = {
    interactive: true,
    appendTo: ref =>  document.querySelector('.carousel-wrapper')
  }
  public collection$: Observable<Collection> = this.store.select(selectCurrentCollection);
  public dishes = [
    {id: '0', name: 'Burger', analogs: ['2', '1', '5', '6'], time: 'Завтрак', image: 'assets/media/temp/food/burger.webp'},
    {id: '1', name: 'Pizza',  analogs: ['4', '0', '6', '1'], time: 'Полдник', image: 'assets/media/temp/food/pizza.webp'},
    {id: '2', name: 'Pasta',  analogs: ['5', '3', '4', '6'], time: 'Обед', image: 'assets/media/temp/food/pasta.jpg'},
    {id: '3', name: 'Soup',   analogs: ['6', '0', '1'], time: 'Десерт', image: 'assets/media/temp/food/soup.jpeg'},
    {id: '4', name: 'Kebab',  analogs: ['3', '2', '5'], time: 'Ужин', image: 'assets/media/temp/food/kebab.jpg'},
    {id: '5', name: 'Cake',   analogs: ['1', '4', '2'], time: 'Перед сном', image: 'assets/media/temp/food/cake.jpg'},
    {id: '6', name: 'Sushi',  analogs: ['0', '2'], time: 'Закусон', image: 'assets/media/temp/food/sushi.jpg'}
  ];

  constructor(
    private readonly store: Store,
    private readonly route: ActivatedRoute
  ) {
    this.getDish = memoize(this.getDish);
    this.getAnalogs = memoize(this.getAnalogs);
    route.params.subscribe((params: {id: string}) =>
      store.dispatch(setCurrentCollectionId(params)));
  }

  public getDish = id => this.dishes.find(dish => dish.id === id);
  public getAnalogs = id => {
    const current = this.dishes.find(dish => dish.id === id);
    return current.analogs.map(analogId => this.dishes.find(item => item.id === analogId))
  }

  ngOnDestroy(): void {
    this.store.dispatch(setCurrentCollectionId(null))
  }
}
