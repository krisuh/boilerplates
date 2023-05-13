export function groupBy<T>(
  list: T[],
  getItemKey: (item: T) => string,
): { readonly [key: string]: T[] } {
  return list.reduce((acc, cur) => {
    const key = getItemKey(cur);
    const group = acc[key] ?? [];
    group.push(cur);
    return { ...acc, [key]: group };
  }, {} as { readonly [key: string]: T[] });
}
