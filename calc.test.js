import { test } from 'node:test';
import assert from 'node:assert/strict';
import { add, divide } from './calc.js';

test('add', () => assert.equal(add(2, 3), 5));
test('divide', () => assert.equal(divide(6, 3), 2));
test('divide by zero throws RangeError', () => {
  assert.throws(() => divide(1, 0), RangeError);
  assert.throws(() => divide(0, 0), RangeError);
  assert.throws(() => divide(1, -0), RangeError);
});
