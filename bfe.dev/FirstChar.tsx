  // your code here
type FirstChar<T extends string> = T extends `${infer F}${infer R}` ? F : never;

type A = FirstChar<'BFE'> // 'B'
type B = FirstChar<'dev'> // 'd'
type C = FirstChar<''> // never
