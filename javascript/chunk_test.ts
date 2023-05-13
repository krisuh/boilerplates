import { assertEquals } from 'https://deno.land/std@0.167.0/testing/asserts.ts';
import { chunk } from './chunk.ts';

Deno.test('chunk should chop array into pieces of correct length', () => {
  const testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  const result = chunk(testData, 5);
  assertEquals(result.length, 4);
  assertEquals(result[0].length, 5);
  assertEquals(result[1].length, 5);
  assertEquals(result[2].length, 5);
  assertEquals(result[3].length, 2);
});
