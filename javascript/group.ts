export function groupBy<T>(list: T[], getItemKey: (item: T) => string): { readonly [key: string]: T[] } {
    return list.reduce((acc, cur) => {
        const key = getItemKey(cur);
        const group = acc[key] ?? [];
        group.push(cur);
        return { ...acc, [key]: group };
    }, {});
}

interface Person {
    firstname?: string;
    lastname?: string;
    age?: number;
}

const demodata: Person[] = [
    { firstname: 'Erkki', lastname: 'Hervanta', age: 66 },
    { firstname: 'Jaska', lastname: 'Hervanta', age: 23 },
    { firstname: 'Erkki', lastname: 'Pispala', age: 53 },
    { firstname: 'Walrus', lastname: 'Lennon', age: 34 },
    { firstname: 'Max', lastname: 'Power', age: 41 },
    { firstname: 'Max', lastname: 'Salama', age: 22 },
    { firstname: 'Max', lastname: 'Ageless' },
];

function getFirstName(item: Person) {
    return item.firstname ?? 'noName';
}

function getAgeGreaterThan(age: number): (item: Person) => string {
    return (item: Person) => {
        if (!item.age) {
            return 'noAge';
        }
        return String(item.age > age);
    }
}

const groupedByFirstname = groupBy(demodata, getFirstName);
const groupedByAge = groupBy(demodata, getAgeGreaterThan(30));
console.log(JSON.stringify(groupedByFirstname, null, 2));
console.log(JSON.stringify(groupedByAge, null, 2));
