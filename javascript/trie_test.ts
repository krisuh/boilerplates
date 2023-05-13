import { assertEquals } from 'https://deno.land/std@0.167.0/testing/asserts.ts';
import { Trie } from './trie.ts';

Deno.test('trie should contain the added value', () => {
  const trie = new Trie<string>();
  trie.add('app', 'sovellus');
  const result = trie.getValue('app');
  assertEquals(result, 'sovellus');
});
