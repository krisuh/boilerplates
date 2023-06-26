export function range(start: number, end: number): number[] {
  return (new Array(end - start + 1).fill(undefined)).map((_, n) => n + start);
}

export function* rangeGenerator(start: number, end: number): Generator<number, number, number> {
  let i = start;
  for (i; i <= end; i++) {
    yield i;
  }
  return -1;
}
