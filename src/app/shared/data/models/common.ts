export type NotVoid<T extends Function> = (() => void) extends T ? never : T;

export type NullAble<T> = null | T;
