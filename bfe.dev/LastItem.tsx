type LastItem<T extends any[]> = T extends [...any[], infer M] ? M : never;

type A = LastItem<[string, number, boolean]> // boolean
type B = LastItem<['B', 'F', 'E']> // 'E'
type C = LastItem<[]> // never
