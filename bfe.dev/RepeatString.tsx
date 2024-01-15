type RepeatString<T extends string, C extends number, R extends string[] = []> = R['length'] extends C 
  ? ''
  : `${T}${RepeatString<T, C, [T, ...R]>}`;

type A = RepeatString<'a', 3> // 'aaa'
type B = RepeatString<'a', 0> // ''
