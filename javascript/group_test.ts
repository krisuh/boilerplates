import { assertEquals } from 'https://deno.land/std@0.167.0/testing/asserts.ts';
import { groupBy } from './group.ts';

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

Deno.test('GroupBy should group items correctly', () => {
  const result = groupBy(demodata, getFirstName);
  assertEquals(result['Max'].length, 3);
});
