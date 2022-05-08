import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Observable, take, tap } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { UITheme } from '@shared/data/models/ui';
import { select, Store } from '@ngrx/store';
import { AppState } from '@store/appState/appState.reducer';
import { setTheme } from '@store/appState/appState.actions';
import { selectTheme } from '@store/appState/appState.selectors';

@Injectable({
  providedIn: 'root'
})
export class UiThemeService {
  private readonly theme$: Observable<UITheme>;
  private readonly _renderer: Renderer2;
  private readonly head: HTMLElement;
  private themeLinks: HTMLElement[] = [];

  constructor(
    rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) document: Document,
    private store: Store<{ appState: AppState }>
  ) {
    this.head = document.head;
    this._renderer = rendererFactory.createRenderer(null, null);
    this.theme$ = this.store.select('appState').pipe(select(selectTheme));
  }

  public UITheming(): Observable<UITheme> {
    this.themeInit();

    return this.theme$.pipe(
      tap(theme => this.setCssLink(theme))
    );
  }

  public setTheme(theme?: UITheme): void {
    if (!theme) {
      this.switchTheme().subscribe();
      return;
    }
    this.store.dispatch(setTheme({theme}));
    localStorage.setItem('theme', theme);
  }

  private themeInit(): void {
    const lsTheme = localStorage.getItem('theme') as UITheme;
    const isThemeSaved = [UITheme.DEFAULT, UITheme.DARK].some(k => k.includes(lsTheme));

    this.setTheme(isThemeSaved ? lsTheme : UITheme.DEFAULT);
  }

  private switchTheme(): Observable<UITheme> {
    return this.theme$
      .pipe(
        take(1),
        tap(theme =>
          this.setTheme([UITheme.DEFAULT, UITheme.DARK].find(k => k !== theme))
        )
      )
  }

  private async setCssLink(theme: UITheme) {
    await this.loadCss(`${theme}.css`);

    if (this.themeLinks.length == 2)
      this._renderer.removeChild(this.head, this.themeLinks.shift());
  }

  private async loadCss(filename: string): Promise<void> {
    return new Promise(resolve => {
      const linkEl: HTMLElement = this._renderer.createElement('link');
      this._renderer.setAttribute(linkEl, 'rel', 'stylesheet');
      this._renderer.setAttribute(linkEl, 'type', 'text/css');
      this._renderer.setAttribute(linkEl, 'href', filename);
      this._renderer.setProperty(linkEl, 'onload', resolve);
      this._renderer.appendChild(this.head, linkEl);
      this.themeLinks = [...this.themeLinks, linkEl];
    })
  }
}
