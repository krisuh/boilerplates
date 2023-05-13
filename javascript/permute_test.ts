import { assertArrayIncludes } from 'https://deno.land/std@0.167.0/testing/asserts.ts';
import { permute } from './permute.ts';

Deno.test('permute should make correct permutations', () => {
  const permutations = permute([1, 2, 3]);
  assertArrayIncludes(permutations, [[1, 2, 3]]);
  assertArrayIncludes(permutations, [[2, 1, 3]]);
  assertArrayIncludes(permutations, [[1, 3, 2]]);
  assertArrayIncludes(permutations, [[3, 2, 1]]);
  assertArrayIncludes(permutations, [[2, 3, 1]]);
  assertArrayIncludes(permutations, [[3, 1, 2]]);
});
