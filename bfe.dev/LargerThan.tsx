type LargerThan<A extends number, B extends number, Buffer extends string[] = []> = 
  A extends B 
    ? false // (A == B)
    : Buffer['length'] extends A 
      ? false // (Filling buffer matches the count in A first, which makes A smaller)
      : Buffer['length'] extends B
        ? true //(Filling buffer matchs the count in B first, which makes B smaller)
        : LargerThan<A, B, [...Buffer, 'X']>;


type A = LargerThan<0, 0> // false
type B = LargerThan<1, 0> // true
type C = LargerThan<10, 9> // true
type D = LargerThan<0, 2> // false
