  // your code here
type LastChar<T extends string> = T extends `${infer F}${infer L}` 
  ? L extends '' ? F : LastChar<L>
  : never;

type A = LastChar<'BFE'> // 'E'
type B = LastChar<'dev'> // 'v'
type C = LastChar<''> // never
