import { createSelector, createFeatureSelector, ActionReducerMap, } from '@ngrx/store';
import * as fromCollections from './collections.reducer';
// TODO refactor this shit
export interface State {
  collections: fromCollections.CollectionsState;
}

export const reducers: ActionReducerMap<State> = {
  collections: fromCollections.collectionsReducer,
};

export const selectCollectionState = createFeatureSelector<fromCollections.CollectionsState>('collections');


export const selectCollectionIds = createSelector(
  selectCollectionState,
  fromCollections.selectCollectionsIds
);
export const selectCollectionEntities = createSelector(
  selectCollectionState,
  fromCollections.selectCollectionsEntities
);
export const selectAllCollections = createSelector(
  selectCollectionState,
  fromCollections.selectAllCollections
);
export const selectCollectionTotal = createSelector(
  selectCollectionState,
  fromCollections.selectCollectionsTotal
);
export const selectCurrentCollectionId = createSelector(
  selectCollectionState,
  fromCollections.getSelectedCollectionId
);
export const selectCurrentCollection = createSelector(
  selectCollectionEntities,
  selectCurrentCollectionId,
  (CollectionEntities, CollectionId) =>
    ('number' === typeof CollectionId) && CollectionEntities[CollectionId]
);
