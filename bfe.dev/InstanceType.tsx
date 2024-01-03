// your code here, please don't use InstanceType<T> in your code
type FunctionType<P extends any[], R> = new (...args: P) => R;
type MyInstanceType<fn extends FunctionType<any, any>> = fn extends FunctionType<any, infer R> ? R : never;
