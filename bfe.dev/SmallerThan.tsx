type SmallerThan<A extends number, B extends number, Buffer extends string[] = []> = 
  A extends B 
    ? false // (A == B)
    : Buffer['length'] extends B 
      ? false // (Filling buffer matches the count in A first, which makes A smaller)
      : Buffer['length'] extends A
        ? true //(Filling buffer matchs the count in B first, which makes B smaller)
        : SmallerThan<A, B, [...Buffer, 'X']>;


type A = SmallerThan<0, 0> // false
type B = SmallerThan<1, 0> // false
type C = SmallerThan<10, 9> // false
type D = SmallerThan<0, 2> // true
