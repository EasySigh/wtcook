import { NullAble } from '@shared/data/models/common';

export interface Dish {
  id: number,
  title: string,
  recipe?: NullAble<JSON>,
  image: string,
  public: boolean,
  createdAt: Date
}
