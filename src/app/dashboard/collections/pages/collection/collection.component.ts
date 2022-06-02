import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'wt-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionComponent{
  item
  dishes = [
    {name: 'Burger', image: 'assets/media/temp/food/burger.webp'},
    {name: 'Pizza', image: 'assets/media/temp/food/pizza.webp'},
    {name: 'Pasta', image: 'assets/media/temp/food/pasta.jpg'},
    {name: 'Soup', image: 'assets/media/temp/food/soup.jpeg'},
    {name: 'Kebab', image: 'assets/media/temp/food/kebab.jpg'},
    {name: 'Cake', image: 'assets/media/temp/food/cake.jpg'},
    {name: 'Sushi', image: 'assets/media/temp/food/sushi.jpg'},
    {name: null, image: null}
  ];
  constructor() { }

}
