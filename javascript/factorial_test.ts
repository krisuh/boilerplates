import { assertEquals } from 'https://deno.land/std@0.167.0/testing/asserts.ts';
import { factorial } from './factorial.ts';

Deno.test('factorial should calculate correctly', () => {
  const data = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
  ];
  const result = data.map((n) => factorial(n));

  assertEquals(result, [
    1,
    2,
    6,
    24,
    120,
    720,
    5040,
    40320,
    362880,
    3628800,
  ]);
});
