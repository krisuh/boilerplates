export function chunk<T>(items: T[], size = 10): T[][] {
  const result: T[][] = [];
  let temp: T[] = [];
  for (const item of items) {
    temp.push(item);
    if (temp.length % size === 0) {
      result.push(temp);
      temp = [];
    }
  }
  if (temp.length > 0) {
    result.push(temp);
  }
  return result;
}
