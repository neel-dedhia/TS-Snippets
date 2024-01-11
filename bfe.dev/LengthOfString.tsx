type StringToTuple<T extends string> = T extends `${infer I}${infer Rest}` ? [I, ...StringToTuple<Rest>] : [];
type LengthOfString<T extends string> = StringToTuple<T>['length'];

type A = LengthOfString<'BFE.dev'> // 7
type B = LengthOfString<''> // 0
