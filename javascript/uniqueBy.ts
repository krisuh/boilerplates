export function uniqueBy<T>(
  items: T[],
  getKeyCallBack: (item: T) => string,
): T[] {
  const uniqueKeys: string[] = [];
  const uniqueValues: T[] = [];
  for (const item of items) {
    const key = getKeyCallBack(item);
    if (!uniqueKeys.includes(key)) {
      uniqueKeys.push(key);
      uniqueValues.push(item);
    }
  }
  return uniqueValues;
}

interface Person {
  firstName: string;
  lastName: string;
}

const demodata: Person[] = [
  { firstName: 'Erkki', lastName: 'Hervanta' },
  { firstName: 'Max', lastName: 'Power' },
  { firstName: 'Maxine', lastName: 'Power' },
  { firstName: 'Anni', lastName: 'Hervanta' },
  { firstName: 'Mats', lastName: 'Paakari' },
  { firstName: 'Foo', lastName: 'Bar' },
];

function getLastName(item: Person): string {
  return item.lastName;
}

function getFirstName(item: Person): string {
  return item.firstName;
}

const uniqueLastNames = uniqueBy(demodata, getLastName).map(getLastName);
const uniqueFirstNames = uniqueBy(demodata, getFirstName).map(getFirstName);
console.log(uniqueLastNames);
console.log(uniqueFirstNames);
