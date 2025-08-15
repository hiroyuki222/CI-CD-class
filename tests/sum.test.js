const soma = require('../src/Sum');

test('soma 2 + 3 = 5', () => {
  expect(soma(2, 3)).toBe(5);
});