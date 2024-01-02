type ConstructorType<T extends any[]> = new (...args: T) => any;
type MyConstructorParameters<T extends ConstructorType<any>> = T extends ConstructorType<infer U> ? U : never;
