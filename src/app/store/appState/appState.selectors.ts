import { createSelector } from '@ngrx/store';
import { UITheme } from '@shared/data/models/ui';
import { UserRight } from '@shared/data/models';
import { AppState } from '@store/appState/appState.reducer';

export interface UIState {theme: UITheme, filter: UserRight, isLoading: boolean}

export const selectUI = (state: AppState) => state.ui;
export const selectTheme   = createSelector(selectUI, (state: UIState) => state.theme);
export const selectFilter  = createSelector(selectUI, (state: UIState) => state.filter);
export const selectLoading = createSelector(selectUI, (state: UIState) => state.isLoading);
