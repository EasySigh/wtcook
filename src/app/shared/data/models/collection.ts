import { NullAble } from '@shared/data/models/common';
import { Dish } from '@shared/data/models/dish';


export interface Collection {
  id: number,
  title: string,
  description: string,
  image: string,
  createdAt: Date,
  public: boolean,
  parent: NullAble<string>,
  dishes: DishRef[]
}

export interface DishRef {
  id: number,
  analogs: number[],
  time: Date
}
