// A tiny calculator, so the agent has code to read, test and change.
export function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('add() expects two numbers');
  }
  return a + b;
}

export function divide(a, b) {
  return a / b;
}
