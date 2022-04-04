export interface UserData {
  id?: string,
  name?: string,
  email: string,
  password?: string,
  createdAt?: Date,
  isApproved?: boolean,
  isPolled?: boolean,
  lastSeen?: Date,
  isOnline?: boolean,
  personal?: {
    birthDayDate?: Date,
    age?: number,
    avatar?: any,
    foodPreferences?: FoodPreferences
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

