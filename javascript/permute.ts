import { uniqueBy } from "./uniqueBy";

// QuickPerm https://www.quickperm.org/
export function permute<T>(items: T[]): T[][] {
    const copyOfItems: T[] = items.slice(0);
    const N = copyOfItems.length;
    const p = copyOfItems.map((_, index) => index);
    p.push(copyOfItems.length);
    let i = 1;
    let results: T[][] = [];
    while(true) {
        results.push(copyOfItems.slice(0));
        if (i >= N) break;
        p[i] = p[i] - 1;
        let j = 0;
        if (i % 2 !== 0) {
            j = p[i];
        }
        swap(copyOfItems, j, i);
        i = 1;
        while(p[i] === 0) {
            p[i] = i;
            i = i + 1;
        }
    }
    return results;
}

export function swap<T>(items: T[], i: number, j: number) {
    const temp = items[i];
    items[i] = items[j];
    items[j] = temp;
}

const ar = [1,2,3,4];
const permutations = permute(ar);
console.log('array', ar, 'can be permuted into', permutations.length, 'permutations, which are');
console.log(permutations);
console.log('there are', uniqueBy(permutations, (n) => n.join(',')).length, 'unique permutations. Should be equal to the amount of permutations above.');

