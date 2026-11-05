const somatorio = require('../funcoes/somatorio');

test('deve somar corretamente os elementos de um array de números positivos', () => {
  expect(somatorio.calcularSomatorio([10, 20.5, 30, 4.5])).toBe(65);
});

test('deve somar corretamente os elementos de um array contendo números negativos', () => {
  expect(somatorio.calcularSomatorio([10, 20.5, 30, -5, 4.5])).toBe(60);
});
