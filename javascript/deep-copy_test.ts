import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { deepCopy } from "./deep-copy.ts";

interface TestObject {
  key: {
    anotherKey: {
      s: string;
    }
  }
}

Deno.test('deepCopy should make a deep copy of an object', () => {
  const testObject: TestObject = {
    key: {
      anotherKey: {
        s: 'Original'
      }
    }
  };

  const result = deepCopy(testObject) as TestObject;

  result.key.anotherKey.s = 'This should not change the original';
  assertEquals(result.key.anotherKey.s, 'This should not change the original');
  assertEquals(testObject.key.anotherKey.s, 'Original');
});

Deno.test('deepCopy should make a deep copy of an array', () => {
  const array: Array<TestObject> = [
    { 
      key: {
        anotherKey: {
          s: 'Original'
        }
      }
    },
    { 
      key: {
        anotherKey: {
          s: 'Original 2'
        }
      }
    },
  ];
  const copy = deepCopy(array) as Array<TestObject>;
  copy[0].key.anotherKey.s = 'Changed';
  assertEquals(copy[0].key.anotherKey.s, 'Changed');
  assertEquals(array[0].key.anotherKey.s, 'Original');
});