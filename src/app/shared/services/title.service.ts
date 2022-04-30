import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
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
   * Subscribe on Router Event and set HTML Document Title
   */
  public setRouteTitle(): void {
    this.onRouteChange().subscribe(() => this.setTitle())
  }

  private onRouteChange(): Observable<any> {
    return this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
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
