// your code here
type UnwrapPromise<T extends Promise<any>> = T extends Promise<infer U> ? U : never;

type A = UnwrapPromise<Promise<string>> // string
type B = UnwrapPromise<Promise<null>> // null
type C = UnwrapPromise<null> // Error
