import { NullAble } from '@shared/data/models/common';

export interface UserData {
  id: string,
  name: string,
  email: string,
  isEmailApproved: boolean,
  role: UserRole,
  rating: NullAble<number>;
  createdAt: Date,
  lastSeen: Date,
  personal: {
    avatar: NullAble<string>,
    about: NullAble<string>
    birthDayDate: NullAble<Date>
  }
}

export enum UserRole {GUEST = 'GUEST', USER = 'USER', MODERATOR = 'MODERATOR', ADMIN = 'ADMIN'}

export enum UserRight {GUEST = 0, USER = 1, MODERATOR = 3, ADMIN = 7}

export enum AvailableFor {
  GUEST = 0,
  USER = 1,
  MODERATOR = 1 << 1,
  ADMIN = 1 << 2
}

