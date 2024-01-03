// your code here, please don't use Return<T> in your code
type MyReturnType<fn extends Function> = fn extends (...args: any[]) => infer returnType ? returnType : never;
