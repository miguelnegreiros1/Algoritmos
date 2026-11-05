const numeroPrimo = require('../funcoes/numeroPrimo');

test('deve retornar true para um número primo (ex: 17)', () => {
  expect(numeroPrimo.ePrimo(17)).toBe(true);
});

test('deve retornar false para um número não primo (ex: 4)', () => {
  expect(numeroPrimo.ePrimo(4)).toBe(false);
});
