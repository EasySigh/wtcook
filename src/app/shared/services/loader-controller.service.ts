import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, map, combineLatestWith } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from '@appState/appState.reducer';
import { selectLoading } from '@appState/appState.selectors';

@Injectable({
  providedIn: 'root'
})
export class LoaderControllerService {
  private isLoading$: Observable<boolean>;
  private readonly _loaderIds = new BehaviorSubject([]);

  constructor(private readonly store: Store<{ appState: AppState }>) {
    this.isLoading$ = store.select('appState').pipe(select(selectLoading));
  }

  public addLoader(id: number) {
    this._loaderIds.next([...this._loaderIds.getValue(), id]);
  }

  public removeLoader(id: number): void {
    const loaderIdsCopy: number[] = this._loaderIds.getValue();
    const loaderIndex = loaderIdsCopy.findIndex(k => k === id);

    loaderIdsCopy.splice(loaderIndex, 1);
    this._loaderIds.next(loaderIdsCopy);
  }

  public getLoaderState(id: number): Observable<boolean> {
    return this.isLoading$.pipe(
      combineLatestWith(this._loaderIds),
      map(([isLoading, loaderIds]) =>
        [isLoading, id === Math.max(...loaderIds)].every(state => state === true)
      )
    )
  }
}
