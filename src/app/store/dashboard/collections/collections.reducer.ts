import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as CollectionsActions from './collections.actions';
import { Collection, NullAble } from '@shared/data/models';

import { fakeCollectionsData } from './temp';

// TODO refactor this shit
export interface CollectionsState extends EntityState<Collection> {
  selectedCollectionId: NullAble<number>
}

export function selectCollectionId(c: Collection): number {
  return c.id;
}

export function sortByDate(a: Collection, b: Collection): number {
  return +(a.createdAt > b.createdAt);
}

export const adapter: EntityAdapter<Collection> = createEntityAdapter<Collection>({
  selectId: selectCollectionId,
  sortComparer: sortByDate
});

export const initialState: CollectionsState = adapter.getInitialState(fakeCollectionsData);

export const collectionsReducer = createReducer(
  initialState,
  on(CollectionsActions.addCollection, (state, { collection }) => {
    return adapter.addOne(collection, state)
  }),
  on(CollectionsActions.setCollection, (state, { collection }) => {
    return adapter.setOne(collection, state)
  }),
  on(CollectionsActions.upsertCollection, (state, { collection }) => {
    return adapter.upsertOne(collection, state);
  }),
  on(CollectionsActions.addCollections, (state, { collections }) => {
    return adapter.addMany(collections, state);
  }),
  on(CollectionsActions.upsertCollections, (state, { collections }) => {
    return adapter.upsertMany(collections, state);
  }),
  on(CollectionsActions.updateCollection, (state, { update }) => {
    return adapter.updateOne(update, state);
  }),
  on(CollectionsActions.updateCollections, (state, { updates }) => {
    return adapter.updateMany(updates, state);
  }),
  on(CollectionsActions.mapCollection, (state, { entityMap }) => {
    return adapter.mapOne(entityMap, state);
  }),
  on(CollectionsActions.mapCollections, (state, { entityMap }) => {
    return adapter.map(entityMap, state);
  }),
  on(CollectionsActions.deleteCollection, (state, { id }) => {
    return adapter.removeOne(id, state);
  }),
  on(CollectionsActions.deleteCollections, (state, { ids }) => {
    return adapter.removeMany(ids, state);
  }),
  on(CollectionsActions.deleteCollectionsByPredicate, (state, { predicate }) => {
    return adapter.removeMany(predicate, state);
  }),
  on(CollectionsActions.loadCollections, (state, { collections }) => {
    return adapter.setAll(collections, state);
  }),
  on(CollectionsActions.setCollections, (state, { collections }) => {
    return adapter.setMany(collections, state);
  }),
  on(CollectionsActions.clearCollections, state => {
    return adapter.removeAll({ ...state, selectedCollectionId: null });
  })
);

export const getSelectedCollectionId = (state: CollectionsState) => state.selectedCollectionId;

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

// select the array of collections ids
export const selectCollectionsIds = selectIds;

// select the dictionary of collection entities
export const selectCollectionsEntities = selectEntities;

// select the array of collections
export const selectAllCollections = selectAll;

// select the total collections count
export const selectCollectionsTotal = selectTotal;
