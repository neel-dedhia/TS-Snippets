type Filter<T extends any[], A> = T extends [infer I, ...infer R] 
  ? [I] extends [A] ? [I, ...Filter<R, A>] : Filter<R, A>
  : [];

/* 
  [I] extends [A] handles following cases
  1. [any] extends [string] will give only union & not intersection unlike any extends string.
  2. [never] extends [string] will not break the recursion
  3. [unknown] extends [string] will skip unknown and continue the recursion

  Note: To avoid inclusion of never, any in the resultant we can further add condition to skip any & never type
*/

type A = Filter<[1,'BFE', 2, true, 'dev'], number> // [1, 2]
type B = Filter<[1,'BFE', 2, true, 'dev'], string> // ['BFE', 'dev']
type C = Filter<[1,'BFE', 2, any, 'dev'], string> // ['BFE', any, 'dev']
