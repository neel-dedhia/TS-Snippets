type IsNever<T> = [T] extends [never] ? true : false;

type A = IsNever<never> // true
type B = IsNever<string> // false
type C = IsNever<undefined> // false

// https://github.com/microsoft/TypeScript/issues/31751#issuecomment-498526919
