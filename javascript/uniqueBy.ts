export function uniqueBy<T>(items: T[], getKeyCb: (item: T) => string): T[] {
    const uniqueKeys: string[] = [];
    const uniqueValues: T[] = [];
    for (const item of items) {
        const key = getKeyCb(item);
        if (!uniqueKeys.includes(key)) {
            uniqueKeys.push(key);
            uniqueValues.push(item);
        }
    }
    return uniqueValues;
}


const demodata = [
    { firstName: 'Erkki', lastName: 'Hervanta' },
    { firstName: 'Max', lastName: 'Power' },
    { firstName: 'Maxine', lastName: 'Power' },
    { firstName: 'Anni', lastName: 'Hervanta' },
    { firstName: 'Mats', lastName: 'Paakari' },
    { firstName: 'Foo', lastName: 'Bar' },
];

function  getLastName(item = { firstName: '', lastName: '' }) {
    return item.lastName;
}

const result = uniqueBy(demodata, getLastName);
console.log(result);
