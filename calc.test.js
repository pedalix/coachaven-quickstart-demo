import { test } from 'node:test';
import assert from 'node:assert/strict';
import { add, divide } from './calc.js';

test('add', () => assert.equal(add(2, 3), 5));
test('add handles negatives and decimals', () => {
  assert.equal(add(-2, 3), 1);
  assert.ok(Math.abs(add(0.1, 0.2) - 0.3) < Number.EPSILON);
});

test('divide', () => assert.equal(divide(6, 3), 2));
test('divide handles negatives and fractions', () => {
  assert.equal(divide(-6, 3), -2);
  assert.equal(divide(1, 4), 0.25);
});
test('divide throws RangeError for a zero divisor', () => {
  assert.throws(() => divide(1, 0), RangeError);
  assert.throws(() => divide(0, 0), RangeError);
  assert.throws(() => divide(1, -0), RangeError);
});
