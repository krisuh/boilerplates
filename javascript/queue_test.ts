import { assertEquals } from 'https://deno.land/std@0.167.0/testing/asserts.ts';
import { Queue } from './queue.ts';

Deno.test('queue dequeue should return null when empty', () => {
  const q = new Queue<number>();
  const result = q.dequeue();
  assertEquals(result, null);
});

Deno.test('queue enqueue and dequeue should work in correct order', () => {
  const q = new Queue<number>();
  q.enqueue(1);
  q.enqueue(2);
  const one = q.dequeue();
  const two = q.dequeue();
  assertEquals(one, 1);
  assertEquals(two, 2);
});
