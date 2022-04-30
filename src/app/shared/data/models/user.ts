export interface UserData {
  id?: string,
  name?: string,
  email: string,
  password?: string,
  isApproved?: boolean,
  createdAt?: Date,
  lastSeen?: Date,
  personal?: {
    birthDayDate?: Date,
    age?: number,
    avatar?: any,
  }
}

export interface FoodPreferences {
  restrictions: {
    vegan: boolean,
    allergy: Array<string>,
    hates: Array<string>,
  },
  kitchen: Array<string>,
  favorites?: Array<string>
}

export enum UserRole {
  GUEST = 'guest',
  USER = 'user',
  MODERATOR = 'moderator',
  ADMIN = 'admin'
}

export enum UserRight {
  GUEST = 0,
  USER = 1,
  MODERATOR = 3,
  ADMIN = 7
}

export const RIGHTS = {
  'guest': 0,
  'user': 1,
  'moderator': 1 << 1,
  'admin': 1 << 2
}
