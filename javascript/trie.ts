/**
 * Perhaps a stupid recursive implementation of Trie data structure.
 * https://en.wikipedia.org/wiki/Trie
 */

import { isNil } from "./isNil.ts";
import { Stack } from "./stack.ts";

interface TrieNode<T> {
  [key: string]: TrieNode<T> | T;
}

export class Trie<T> {
  private root: TrieNode<T>;

  constructor() {
    this.root = {};
  }

  public add(word: string, value: T) {
    let temp = this.root;
    let rest = word;
    while(rest.length > 0) {
      const key = rest.charAt(0);
      const child = temp[key] ?? {};
      temp[key] = child;
      temp = child;
      rest = rest.slice(1);
    }
    temp['value'] = value;
  }

  public get(word: string): TrieNode<T> | null {
    let pointer: TrieNode<T>= this.root;
    let rest = word;
    while (rest.length > 0) {
      const key = rest.charAt(0);
      const child = pointer[key] as TrieNode<T>;
      if (isNil(child)) {
        return null;
      }
      pointer = child;
      rest = rest.slice(1);
    }
    return pointer;
  }

  public getValue(word: string): T | null {
    const node = this.get(word);
    if (node) return node['value'] as T ?? null;
    return null;
  }

  public contains(word: string): boolean {
    return !isNil(this.get(word));
  }

  public getLeaves(word: string): TrieNode<T>[] {
    const node = this.get(word);
    const results: TrieNode<T>[] = [];
    if (!node) {
      return [];
    }
    const unvisited = new Stack<TrieNode<T>>();
    unvisited.push(node);
    while(unvisited.size() > 0) {
      const n = unvisited.pop();
      if (n && n['value']) {
        results.push(n);
      }
      Object.entries(n ?? {}).forEach(([ key, value ]) => {
        if (key !== 'value') {
          unvisited.push(value ?? {});
        }
      });
    }
    return results;
  }

  public getValuesInPath(word: string): T[] {
    const leaves = this.getLeaves(word);
    return leaves.map(leaf => leaf['value'] as T);
  }

}
const start = new Date();
const t = new Trie<string>();
t.add('hello', 'greeting');
t.add('hell', 'hell yeah');
t.add('hel', 'Helsinki');
t.add('app', 'sovellus');
t.add('apple', 'omena');

console.log(t.getValue('hello'));
console.log(t.get('hell'));
console.log(t.get('hel'));
console.log(t.get('he'));
console.log(t.get('app'));
console.log(t.get('apple'));
const end = new Date();
const diff = end.getTime() - start.getTime();
console.log('took', diff, 'milliseconds');
console.log(t.getValuesInPath('hell'));