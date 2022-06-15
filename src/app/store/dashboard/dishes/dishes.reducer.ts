import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as DishesActions from './dishes.actions';
import { Dish, NullAble } from '@shared/data/models';

import { fakeDishesData } from './temp';

export interface DishesState extends EntityState<Dish> {
  selectedDishId: NullAble<number>;
}

export const adapter: EntityAdapter<Dish> = createEntityAdapter<Dish>({
  selectId: c => c.id,
  sortComparer: (a, b) => a.title.localeCompare(b.title)
});

export const initialState: DishesState = adapter.getInitialState(fakeDishesData);

export const dishesReducer = createReducer(
  initialState,
  on(DishesActions.addDish, (state, { Dish }) => {
    return adapter.addOne(Dish, state)
  }),
  on(DishesActions.setDish, (state, { Dish }) => {
    return adapter.setOne(Dish, state)
  }),
  on(DishesActions.upsertDish, (state, { Dish }) => {
    return adapter.upsertOne(Dish, state);
  }),
  on(DishesActions.addDishes, (state, { Dishes }) => {
    return adapter.addMany(Dishes, state);
  }),
  on(DishesActions.upsertDishes, (state, { Dishes }) => {
    return adapter.upsertMany(Dishes, state);
  }),
  on(DishesActions.updateDish, (state, { update }) => {
    return adapter.updateOne(update, state);
  }),
  on(DishesActions.updateDishes, (state, { updates }) => {
    return adapter.updateMany(updates, state);
  }),
  on(DishesActions.mapDish, (state, { entityMap }) => {
    return adapter.mapOne(entityMap, state);
  }),
  on(DishesActions.mapDishes, (state, { entityMap }) => {
    return adapter.map(entityMap, state);
  }),
  on(DishesActions.deleteDish, (state, { id }) => {
    return adapter.removeOne(id, state);
  }),
  on(DishesActions.deleteDishes, (state, { ids }) => {
    return adapter.removeMany(ids, state);
  }),
  on(DishesActions.deleteDishesByPredicate, (state, { predicate }) => {
    return adapter.removeMany(predicate, state);
  }),
  on(DishesActions.loadDishes, (state, { Dishes }) => {
    return adapter.setAll(Dishes, state);
  }),
  on(DishesActions.setDishes, (state, { Dishes }) => {
    return adapter.setMany(Dishes, state);
  }),
  on(DishesActions.clearDishes, state => {
    return adapter.removeAll({ ...state, selectedDishId: null });
  }),
  on(DishesActions.setCurrentDishId, (state, {id}) => {
    return {...state, selectedDishId: +id}
  }),
  on(DishesActions.setCurrentDish, (state, {Dish}) => {
    return {...state, selectedDishId: Dish.id}
  })
);

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

// get current (selected) Dish id
export const getSelectedDishId = (state: DishesState) => state.selectedDishId;

// select the array of Dishes ids
export const selectDishesIds = selectIds;

// select the dictionary of Dish entities
export const selectDishesEntities = selectEntities;

// select the array of Dishes
export const selectAllDishes = selectAll;

// select the total Dishes count
export const selectDishesTotal = selectTotal;
