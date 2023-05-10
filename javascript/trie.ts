/**
 * Perhaps a stupid recursive implementation of Trie data structure.
 * https://en.wikipedia.org/wiki/Trie
 */

import { isNil } from "./isNil.ts";

export interface Trie<T> {
  readonly [key: string]: Trie<T> | T;
}


export function addToTrie<T>(trie: Trie<T>, word: string, value: T): Trie<T> {
  if (word.length === 0) {
    return { ...trie, 'value': value };
  }
  const key = word.charAt(0);
  const child = trie[key] ?? {};
  return { ...trie, [key]: addToTrie<T>(child as Trie<T>, word.slice(1), value) };
}

export function get<T>(trie: Trie<T>, word: string): T | null {
  if (word.length === 0) {
    return trie['value'] as T ?? null;
  }
  const key = word.charAt(0);
  const child = trie[key];
  if (!child) {
    return null;
  }
  return get(child as Trie<T>, word.slice(1));
}

export function contains<T>(trie: Trie<T>, word: string): boolean {
  return !isNil(get(trie, word));
}

const trie = addToTrie(addToTrie(addToTrie(addToTrie({}, 'apple', 'omena'), 'app', 'sovellus'), 'testing', 'kokeillaan'), 'spotify', 'musiikkia');

console.log(JSON.stringify(trie, null, 2));
console.log(get(trie, 'app'));
console.log(get(trie, 'appley'));
console.log(get(trie, 'apple'));
console.log(get(trie, 'pask'));
console.log(get(trie, 'piski'));
console.log(get(trie, 'paska'));
console.log(get(trie, 'spotify'));
console.log(contains(trie, 'app'));