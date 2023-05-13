import { assertEquals } from 'https://deno.land/std@0.167.0/testing/asserts.ts';
import { Stack } from './stack.ts';

Deno.test('stack should pop null when empty', () => {
  const s = new Stack<number>();
  const result = s.pop();
  assertEquals(result, null);
});

Deno.test('stack should pop items in correct order', () => {
  const s = new Stack<number>();
  s.push(1);
  s.push(2);
  const two = s.pop();
  const one = s.pop();
  assertEquals(two, 2);
  assertEquals(one, 1);
});
