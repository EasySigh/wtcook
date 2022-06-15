import { createAction, props } from '@ngrx/store';
import { Update, EntityMap, EntityMapOne, Predicate } from '@ngrx/entity';
import { Collection } from '@shared/data/models';


export const loadCollections        = createAction('[Collection/API] Load Collections',   props<{ collections: Collection[] }>());
export const setCollections         = createAction('[Collection/API] Set Collections',    props<{ collections: Collection[] }>());
export const addCollection          = createAction('[Collection/API] Add Collection',     props<{ collection: Collection }>());
export const setCollection          = createAction('[Collection/API] Set Collection',     props<{ collection: Collection }>());
export const upsertCollection       = createAction('[Collection/API] Upsert Collection',  props<{ collection: Collection }>());
export const addCollections         = createAction('[Collection/API] Add Collections',    props<{ collections: Collection[] }>());
export const upsertCollections      = createAction('[Collection/API] Upsert Collections', props<{ collections: Collection[] }>());
export const updateCollection       = createAction('[Collection/API] Update Collection',  props<{ update: Update<Collection> }>());
export const updateCollections      = createAction('[Collection/API] Update Collections', props<{ updates: Update<Collection>[] }>());
export const mapCollection          = createAction('[Collection/API] Map Collection',     props<{ entityMap: EntityMapOne<Collection> }>());
export const mapCollections         = createAction('[Collection/API] Map Collections',    props<{ entityMap: EntityMap<Collection> }>());
export const deleteCollection       = createAction('[Collection/API] Delete Collection',  props<{ id: string }>());
export const deleteCollections      = createAction('[Collection/API] Delete Collections', props<{ ids: string[] }>());
export const deleteCollectionsByPredicate = createAction('[Collection/API] Delete Collections By Predicate', props<{ predicate: Predicate<Collection> }>());
export const clearCollections       = createAction('[Collection/API] Clear Collections');
export const setCurrentCollection   = createAction('[Collection/API] Set Current Collection', props<{ collection: Collection }>());
export const setCurrentCollectionId = createAction('[Collection/API] Set Current Collection Id', props<{ id: number | string }>());
