import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Observable, of, Subject, take, tap } from 'rxjs';
import { ActivatedRoute, Event, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private _routeData = new BehaviorSubject<string>(null);
  public routeData$: Observable<string> = this._routeData.asObservable();

  constructor(
    private title: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  /**
   * Set HTML Document Title on router NavigationEnd event.
   */
  public displayCurrentTitle(): Observable<Event> {
    return this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      tap(_ => this.setTitle())
    );
  }

  private setTitle(): void {
    const currentRoute = this.getChild(this.activatedRoute);
    currentRoute.data
      .pipe(take(1))
      .subscribe(data => {
        this.title.setTitle(data?.title || 'Кухня');
        this._routeData.next(data?.title);
      });
  }

  private getChild(activatedRoute: ActivatedRoute): ActivatedRoute {
    return activatedRoute.firstChild ? this.getChild(activatedRoute.firstChild) : activatedRoute;
  }
}
