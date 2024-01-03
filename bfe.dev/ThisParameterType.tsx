// your code here, please don't use ThisParameterType<T> in your code
type MyThisParameterType<fn extends Function> = fn extends (this: infer THIS) => any ? THIS : never;
