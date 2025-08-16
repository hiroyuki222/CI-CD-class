const main = require('../src/Sum');

test('soma 2 + 3 = 5', () => {
  expect(main(2, 3)).toBe(5);
});

test('exporta uma função', () => {
  expect(typeof main).toBe('function');
});
