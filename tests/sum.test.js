const soma = require('../src/sum');

test('soma 2 + 3 = 5', () => {
  expect(soma(2, 3)).toBe(5);
});