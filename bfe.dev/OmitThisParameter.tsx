// your code here, please don't use OmitThisParameter<T> in your code
type MyOmitThisParameter<T extends (this: any, ...args: any) => any> = T extends (this: any, ...args: infer P) => infer R ?(...args: P) => R : never;


function foo(this: {a: string}) {}
foo() // Error

const bar = foo.bind({a: 'BFE.dev'})
bar() // OK


type Foo = (this: {a: string}) => string
type Bar = MyOmitThisParameter<Foo> // () => string
