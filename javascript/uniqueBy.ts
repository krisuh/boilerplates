export function uniqueBy<T, K>(
  items: T[],
  getKeyCallBack: (item: T) => K,
): T[] {
  const uniqueKeys: K[] = [];
  const uniqueValues: T[] = [];
  for (const item of items) {
    const key = getKeyCallBack(item);
    if (!uniqueKeys.includes(key)) {
      uniqueKeys.push(key);
      uniqueValues.push(item);
    }
  }
  return uniqueValues;
}
