import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  HostBinding,
  Input,
  QueryList
} from '@angular/core';
import { WtCarouselItemDirective } from '../wt-carousel-item.directive';
import { memoize } from '@shared/utils';

@Component({
  selector: 'wt-carousel',
  templateUrl: './wt-carousel.component.html',
  styleUrls: ['./wt-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WtCarouselComponent {
  @Input() index = 0;
  @Input() display = 1;
  @HostBinding('class') className = 'animate';
  @ContentChildren(WtCarouselItemDirective)
  readonly items: QueryList<WtCarouselItemDirective> = new QueryList<WtCarouselItemDirective>();

  constructor(private readonly change: ChangeDetectorRef) {
    WtCarouselComponent.clamp = memoize(WtCarouselComponent.clamp);
    WtCarouselComponent.calcTranslate = memoize(WtCarouselComponent.calcTranslate);
  }

  public next = () => this.updateIndex(this.index + 1);
  public prev = () => this.updateIndex(this.index - 1);

  public get transform(): string {
    const x = WtCarouselComponent.calcTranslate(this.index, this.display, this.items.length);
    return `translateX(${100 * x * this.display}%)`;
  }

  private static clamp(value: number, min: number, max: number): number {
    return Math.min(max, Math.max(min, value));
  }

  private static calcTranslate(index: number, display: number, amount: number): number {
    const oneItemSize = 1 / display / 10 * 2;
    const restItems = amount - (index * display);

    if (!amount) return -((-index + 1) / display - oneItemSize * restItems);

    return restItems < display
      ? (-index + 1) / display - oneItemSize * restItems
      : -index / display;
  }

  private updateIndex(index: number): void {
    this.change.markForCheck();
    const screens = Math.ceil(this.items.length / this.display);
    screens - 1 === this.index
      ? this.index = 0
      : this.index = WtCarouselComponent.clamp(index, 0, screens - 1);
  }
}
