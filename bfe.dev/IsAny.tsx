type IsAny<T> = 0 extends 1 & T ? true : false;
//https://stackoverflow.com/questions/49927523/disallow-call-with-any/49928360#49928360

type A = IsAny<string> // false
type B = IsAny<any> // true
type C = IsAny<unknown> // false
type D = IsAny<never> // false
