export function factorial(n: number) {
  let result = 1;
  let i = 1;
  while (i <= n) {
    result = result * i;
    i++;
  }
  return result;
}
