import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderControllerService } from '@shared/services/loader-controller.service';

@Directive({
  selector: '[wtPreloader]'
})
export class WtPreloaderDirective implements OnInit, OnDestroy {
  @Input('wtPreloader') currentLoaderId: number;
  private subs = new Subscription();

  constructor(
    private readonly templateRef: TemplateRef<any>,
    private readonly viewContainer: ViewContainerRef,
    private readonly loaderService: LoaderControllerService
  ) {}

  public ngOnInit(): void {
    this.loaderService.addLoader(this.currentLoaderId);

    this.subs = this.loaderService.getLoaderState(this.currentLoaderId)
      .subscribe(loaderState => this.changeView(loaderState));
  }

  public ngOnDestroy(): void {
    this.loaderService.removeLoader(this.currentLoaderId);
    this.subs.unsubscribe();
  }

  private changeView(isVisible: boolean): void {
    isVisible
      ? this.viewContainer.createEmbeddedView(this.templateRef)
      : this.viewContainer.clear();
  }
}
