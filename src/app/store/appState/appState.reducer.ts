import { createReducer, on } from '@ngrx/store';
import { setFilter, setLoading, setTheme, setUser } from './appState.actions';
import { UITheme } from '@shared/data/models/ui';
import { UserData, UserRight, UserRole } from '@shared/data/models';

export interface AppState {
  user: UserData,
  ui: {
    theme: UITheme,
    filter: UserRight,
    isLoading: boolean
  }
}

const user: UserData = {
  id: '1',
  name: 'Noname',
  email: 'empty@gmail.com',
  isEmailApproved: false,
  role: UserRole.USER,
  rating: null,
  createdAt: new Date(),
  lastSeen: new Date(),
  personal: {
    avatar: null,
    about: null,
    birthDayDate: new Date()
  }
}

export const initialState: AppState = {
  user,
  ui: {
    theme: null,
    filter: UserRight[user.role],
    isLoading: false
  }
};

export const appStateReducer = createReducer(
  initialState,
  on(setTheme, (state, {theme}) => (
    {
      ...state,
      ui: {...state.ui, theme}
    }
  )),
  on(setFilter, (state, {filter}) => (
    {
      ...state,
      ui: {...state.ui, filter}
    }
  )),
  on(setLoading, (state, {isLoading}) => (
    {
      ...state,
      ui: {...state.ui, isLoading}
    }
  )),
  on(setUser, (state, {user}) => (
    {
      ...state,
      user: {...state.user, ...user},
      ui: {...state.ui, filter: UserRight[user.role]}
    }
  ))
);
