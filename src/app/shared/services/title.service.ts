import { Injectable } from '@angular/core';
import { filter, Observable, tap } from 'rxjs';
import { ActivatedRoute, Event, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(
    private title: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  /**
   * Set HTML Document Title on router NavigationEnd event.
   */
  public onRouteChange(): Observable<Event> {
    return this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      tap(this.setTitle.bind(this))
    );
  }

  private setTitle(): void {
    const currentRoute = this.getChild(this.activatedRoute);
    currentRoute.data
      .subscribe(data => {
        if ('title' in data) this.title.setTitle(data['title'])
        else this.title.setTitle('Кухня');
      });
  }

  private getChild(activatedRoute: ActivatedRoute): ActivatedRoute {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }
}
