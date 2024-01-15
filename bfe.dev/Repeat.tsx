type Decrement = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Repeat<T, C extends number> = 

C extends 0 ? [] :
[T, ...Repeat<T, Decrement[C]>];

// https://bigfrontend.dev/typescript/implement-Repeat-T-C/discuss/23505

type A = Repeat<number, 3> // [number, number, number]
type B = Repeat<string, 2> // [string, string]
type C = Repeat<1, 1> // [1, 1]
type D = Repeat<0, 0> // []
