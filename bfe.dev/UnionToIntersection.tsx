type WrapNakedTypeInFunction<T> = T extends any ? (x: T) => any : never;

type UnionToIntersection<T> = WrapNakedTypeInFunction<T> extends (x: infer R) => any ? R : never;

type A = UnionToIntersection<{a: string} | {b: string} | {c: string}> 
