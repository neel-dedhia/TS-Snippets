type StringToTuple<T extends string> = T extends `${infer I}${infer Rest}` ? [I, ...StringToTuple<Rest>] : [];

type A = StringToTuple<'BFE.dev'> // ['B', 'F', 'E', '.', 'd', 'e','v']
type B = StringToTuple<''> // []
