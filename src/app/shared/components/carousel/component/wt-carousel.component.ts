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
  }

  private static clamp(value: number, min: number, max: number): number {
    return Math.min(max, Math.max(min, value));
  }

  private get calcTranslate(): number {
    const oneItemSize = 1 / this.display / 10 * 2;
    const restItems = this.items.length - (this.index * this.display);

    if (!this.items.length) return -((-this.index + 1) / this.display - oneItemSize * restItems);

    return restItems < this.display
      ? (-this.index + 1) / this.display - oneItemSize * restItems
      : -this.index / this.display;
  }

  public get transform(): string {
    const x = this.calcTranslate;
    return `translateX(${100 * x * this.display}%)`;
  }

  public next = () => this.updateIndex(this.index + 1);
  public prev = () => this.updateIndex(this.index - 1);

  private updateIndex(index: number): void {
    this.change.markForCheck();
    const screens = Math.ceil(this.items.length / this.display);
    screens - 1 === this.index
      ? this.index = 0
      : this.index = WtCarouselComponent.clamp(index, 0, screens - 1);
  }

}
