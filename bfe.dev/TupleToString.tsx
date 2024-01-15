type TupleToString<T extends string[]> = T extends [infer FIRST, ...infer REST]
  ? FIRST extends string
    ? REST extends string[]
      ? `${FIRST}${TupleToString<REST>}`
      : ''
    : ''
  : '';

type A = TupleToString<['a']> // 'a'
type B = TupleToString<['B', 'F', 'E']> // 'BFE'
type C = TupleToString<[]> // ''
