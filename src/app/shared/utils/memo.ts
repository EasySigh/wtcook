import { NotVoid } from '@shared/data/models';


/**
 * ### Memoize «not void» function.
 */
export function memoize<F extends (...args: any[]) => ReturnType<F>>(f: NotVoid<F>): () => ReturnType<F> {
  const cacheLookup = {};
  return function(): ReturnType<F> {
    const key = Array.prototype.join.call(arguments, '-');
    if (key in cacheLookup) {
      return cacheLookup[key];
    } else {
      return cacheLookup[key] = f.apply(this, arguments);
    }
  }
}
