import { NullAble } from '@shared/data/models/common';

export interface NavbarRoute {
  id: string;
  title: NullAble<string>;
  icon: NullAble<string>;
  url?: string;
  access?: number;
  children?: Omit<NavbarRoute, 'id'>[];
}
