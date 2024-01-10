  // your code here
type TupleToUnion<T extends any[]> = T extends [infer E, ...infer Rest] ? E | TupleToUnion<Rest> : never;

type Foo = [string, number, boolean]

type Bar = TupleToUnion<Foo> // string | number | boolean
