import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserData } from '../../models/interfaces/user';

export interface AppState {
  user: UserData;
}

export const userState = (state: AppState) => state.user;

const featureSelector = createFeatureSelector<UserData>('user');
export const userSelector = createSelector(featureSelector, (state: UserData) => state);
