import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getStyles'
})
export class WtGetStylesPipe implements PipeTransform {
  transform(itemsCount: number): Partial<CSSStyleDeclaration> {
    const elemSize = `${100 / itemsCount}%`;
    return {
      flexBasis: elemSize,
      minWidth: elemSize,
      maxWidth: elemSize
    };
  }
}
