type Space<N extends number, S extends string[] = []> = S['length'] extends N ? S : Space<N, [...S, 'X']>;

type Add<A extends number, B extends number> = [...Space<A>, ...Space<B>]['length'];

type A = Add<100, 999> // 3
type B = Add<0, 0> // 0
