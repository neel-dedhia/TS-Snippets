type ToNumber<T extends string, U extends number[] = []> =
  `${U['length']}` extends T
    ? U['length']
    : ToNumber<T, [...U, 1]>
