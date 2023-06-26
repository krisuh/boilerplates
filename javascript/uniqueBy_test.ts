import { assertEquals } from 'https://deno.land/std@0.167.0/testing/asserts.ts';
import { uniqueBy } from './uniqueBy.ts';

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

Deno.test('unique by should return unique values', () => {
  const uniqueByFirstName = uniqueBy(demodata, getFirstName);
  assertEquals(uniqueByFirstName.length, 6);
  const uniqueByLastName = uniqueBy(demodata, getLastName);
  assertEquals(uniqueByLastName.length, 4);
});
