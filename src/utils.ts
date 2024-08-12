export type ReplaceNullWithUndefined<T> = {
  [key in keyof T]: T[keyof T] extends null ? undefined : T[keyof T];
};

export const replaceNullWithUndefined = <T extends Record<string, unknown>>(
  obj: T
): ReplaceNullWithUndefined<T> => {
  return Object.fromEntries(
    Object.entries(obj ?? {}).map(([k, v]) => [k, v ?? undefined])
  ) as ReplaceNullWithUndefined<T>;
};
