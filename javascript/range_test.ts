import { assertEquals } from 'https://deno.land/std@0.167.0/testing/asserts.ts';
import { range, rangeGenerator } from './range.ts';

Deno.test(function testRange_from_0_to_10() {
  const result = range(0, 10);
  assertEquals(result, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

Deno.test(function testRange_from_5_to_6() {
  const result = range(5, 6);
  assertEquals(result, [5, 6]);
});

Deno.test(function testRange_end_larger_than_start() {
  const result = range(6, 5);
  assertEquals(result, []);
});

Deno.test(function testRange_end_same_as_start() {
  const result = range(5, 5);
  assertEquals(result, [5]);
});

Deno.test(function testRangeGenerator() {
  const r = rangeGenerator(0, 10);
  assertEquals(r.next().value, 0);
  assertEquals(r.next().value, 1);
  assertEquals(r.next().value, 2);
  assertEquals(r.next().value, 3);
  assertEquals(r.next().value, 4);
  assertEquals(r.next().value, 5);
  assertEquals(r.next().value, 6);
  assertEquals(r.next().value, 7);
  assertEquals(r.next().value, 8);
  assertEquals(r.next().value, 9);
  assertEquals(r.next().value, 10);
});
