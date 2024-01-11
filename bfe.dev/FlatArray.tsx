type Flat<T extends any[]> = T extends [infer E, ...infer R] 
  ? E extends any[] ? [...Flat<E>, ...Flat<R>] : [E, ...Flat<R>]
  : T;

type A = Flat<[1,2,3]> // [1,2,3]
type B = Flat<[1,[2,3], [4,[5,[6]]]]> // [1,2,3,4,5,6]
type C = Flat<[]> // []
