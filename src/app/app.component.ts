import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, Observable } from 'rxjs';

@Component({
  selector: 'wt-root',
  template: '<div class="bg-gray"><router-outlet></router-outlet></div>',
})
export class AppComponent implements OnInit {
  constructor(
    private title: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.onRouteChange()
    .subscribe(() => this.setTitle());
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
