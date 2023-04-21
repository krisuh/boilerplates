
// QuickPerm https://www.quickperm.org/
function permute(items = []) {
    const copyOfItems = items.slice(0);
    const N = copyOfItems.length;
    const p = copyOfItems.map((_, index) => index);
    p.push(copyOfItems.length);
    let i = 1;
    let results = [];
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

function swap(items, i, j) {
    const temp = items[i];
    items[i] = items[j];
    items[j] = temp;
}

const ar = [1,2,3,4];
const permutations = permute(ar);
console.log('array', ar, 'can be permuted into', permutations.length, 'permutations which are');
console.log(permutations);
console.log(uniq(permutations).length);


function uniq(items) {
    const result = [];
    const strings = [];
    for (const item of items) {
        const s = JSON.stringify(item);
        if (!strings.includes(s)) {
            strings.push(s);
            result.push(item);
        }
    }
    return result;
}

