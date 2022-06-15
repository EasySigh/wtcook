import { createAction, props } from '@ngrx/store';
import { Update, EntityMap, EntityMapOne, Predicate } from '@ngrx/entity';
import { Dish } from '@shared/data/models';


export const loadDishes       = createAction('[Dish/API] Load Dishes',   props<{ Dishes: Dish[] }>());
export const setDishes        = createAction('[Dish/API] Set Dishes',    props<{ Dishes: Dish[] }>());
export const addDish          = createAction('[Dish/API] Add Dish',      props<{ Dish: Dish }>());
export const setDish          = createAction('[Dish/API] Set Dish',      props<{ Dish: Dish }>());
export const upsertDish       = createAction('[Dish/API] Upsert Dish',   props<{ Dish: Dish }>());
export const addDishes        = createAction('[Dish/API] Add Dishes',    props<{ Dishes: Dish[] }>());
export const upsertDishes     = createAction('[Dish/API] Upsert Dishes', props<{ Dishes: Dish[] }>());
export const updateDish       = createAction('[Dish/API] Update Dish',   props<{ update: Update<Dish> }>());
export const updateDishes     = createAction('[Dish/API] Update Dishes', props<{ updates: Update<Dish>[] }>());
export const mapDish          = createAction('[Dish/API] Map Dish',      props<{ entityMap: EntityMapOne<Dish> }>());
export const mapDishes        = createAction('[Dish/API] Map Dishes',    props<{ entityMap: EntityMap<Dish> }>());
export const deleteDish       = createAction('[Dish/API] Delete Dish',   props<{ id: string }>());
export const deleteDishes     = createAction('[Dish/API] Delete Dishes', props<{ ids: string[] }>());
export const deleteDishesByPredicate = createAction('[Dish/API] Delete Dishes By Predicate', props<{ predicate: Predicate<Dish> }>());
export const clearDishes      = createAction('[Dish/API] Clear Dishes');
export const setCurrentDish   = createAction('[Dish/API] Set Current Dish', props<{ Dish: Dish }>());
export const setCurrentDishId = createAction('[Dish/API] Set Current Dish Id', props<{ id: number | string }>());
