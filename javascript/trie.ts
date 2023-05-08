export interface Trie {
  readonly [key: string]: Trie;
}


export function addToTrie(trie: Trie, word: string): Trie {
  if (word.length === 0) {
    return trie;
  }
  const key = word.charAt(0);
  const child = trie[key] ?? {};
  return { ...trie, [key]: addToTrie(child, word.slice(1)) };
}

export function contains(trie: Trie, word: string): boolean {
  if (word.length === 0) {
    return true;
  }
  const key = word.charAt(0);
  const child = trie[key];
  if (!child) {
    return false;
  }
  return contains(child, word.slice(1));
}

const trie = addToTrie(addToTrie(addToTrie({}, 'apple') ?? {}, 'app'), 'paska');

console.log(JSON.stringify(trie, null, 2));
console.log(contains(trie, 'app'));
console.log(contains(trie, 'appley'));
console.log(contains(trie, 'apple'));
console.log(contains(trie, 'pask'));
console.log(contains(trie, 'piski'));