import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { filter, Observable, startWith, take, tap } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { UITheme } from '@shared/data/models/ui';
import { select, Store } from '@ngrx/store';
import { setTheme } from '@store/appState/appState.actions';
import { selectTheme } from '@store/appState/appState.selectors';
import { AppState } from '@store/appState/appState.reducer';

@Injectable({
  providedIn: 'root'
})
export class UiThemeService {
  private readonly theme$: Observable<UITheme>;
  private readonly renderer: Renderer2;
  private readonly head: HTMLElement;
  private themeLinks: HTMLElement[] = [];

  constructor(
    private readonly rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) document: Document,
    private readonly store: Store<{ appState: AppState }>
  ) {
    this.head = document.head;
    this.renderer = rendererFactory.createRenderer(null, null);
    this.theme$ = this.store.select('appState').pipe(select(selectTheme));
  }

  private static isValidTheme(theme: any): boolean {
    return UITheme.DEFAULT === theme || UITheme.DARK === theme;
  }

  private static get systemTheme(): UITheme {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return isDark ? UITheme.DARK : UITheme.DEFAULT;
  }

  private static get lsTheme(): UITheme | null {
    const lsTheme = localStorage.getItem('theme') as UITheme;
    return UiThemeService.isValidTheme(lsTheme) ? lsTheme : null;
  }

  public UITheming(): Observable<UITheme> {
    this.initFavicon();
    const initialValue = UiThemeService.lsTheme || UiThemeService.systemTheme;

    return this.theme$.pipe(
      startWith(initialValue),
      filter(value => UiThemeService.isValidTheme(value)),
      tap(theme => this.setCssLink(theme))
    );
  }

  public updateTheme(theme?: UITheme): void {
    theme
      ? this.store.dispatch( setTheme({theme}) )
      : this.switchTheme().subscribe();
  }

  private switchTheme(): Observable<UITheme> {
    return this.theme$
      .pipe(
        take(1),
        tap(theme =>
          this.updateTheme([UITheme.DEFAULT, UITheme.DARK].find(k => k !== theme))
        )
      )
  }

  private initFavicon(): void {
    const darkIconPath = UiThemeService.systemTheme === UITheme.DARK ? 'assets/' : '';
    const el = this.head.querySelector('link[type="image/x-icon"]');
    this.renderer.setAttribute(el, 'href', `${darkIconPath}favicon.ico`);
  }

  private async setCssLink(theme: UITheme) {
    localStorage.setItem('theme', theme);
    await this.loadCss(`${theme}.css`);

    if (this.themeLinks.length == 2)
      this.renderer.removeChild(this.head, this.themeLinks.shift());
  }

  private async loadCss(filename: string): Promise<void> {
    return new Promise(resolve => {
      const linkEl: HTMLElement = this.renderer.createElement('link');
      this.renderer.setAttribute(linkEl, 'rel', 'stylesheet');
      this.renderer.setAttribute(linkEl, 'type', 'text/css');
      this.renderer.setAttribute(linkEl, 'href', filename);
      this.renderer.setProperty(linkEl, 'onload', resolve);
      this.renderer.appendChild(this.head, linkEl);
      this.themeLinks = [...this.themeLinks, linkEl];
    })
  }
}
