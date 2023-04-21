function factorial(n = 1) {
    let result = 1;
    let i = 1;
    while (i <= n) {
        result = result * i;
        i++;
    }
    return result;
}

const data = [
    1,2,3,4,5,6,7
];

for (const n of data) {
    const r = factorial(n);
    console.log(`factorial of ${n} is`, r);
}
