import { createSelector, createFeatureSelector, ActionReducerMap, } from '@ngrx/store';
import * as fromDishes from './dishes.reducer';

export interface State {
  dishes: fromDishes.DishesState;
}

export const reducers: ActionReducerMap<State> = {
  dishes: fromDishes.dishesReducer,
};

export const selectDishesState = createFeatureSelector<fromDishes.DishesState>('dishes');


export const selectDishIds = createSelector(
  selectDishesState,
  fromDishes.selectDishesIds
);
export const selectDishEntities = createSelector(
  selectDishesState,
  fromDishes.selectDishesEntities
);
export const selectAllDishes = createSelector(
  selectDishesState,
  fromDishes.selectAllDishes
);
export const selectDishesTotal = createSelector(
  selectDishesState,
  fromDishes.selectDishesTotal
);
export const selectCurrentDishId = createSelector(
  selectDishesState,
  fromDishes.getSelectedDishId
);
export const selectCurrentDish = createSelector(
  selectDishEntities,
  selectCurrentDishId,
  (DishEntities, DishId) =>
    ('number' === typeof DishId) && DishEntities[DishId]
);
