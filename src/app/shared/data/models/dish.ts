import { NullAble } from '@shared/data/models/common';

export interface Dish {
  id: number,
  title: string,
  recipe?: NullAble<JSON>,
  photos: string[],
  public: boolean,
  createdAt: Date
}
