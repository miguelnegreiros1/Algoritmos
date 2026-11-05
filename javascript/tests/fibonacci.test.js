const fibonacci = require('../funcoes/fibonacci');

test('os 10 primeiros números da sequência de Fibonacci devem ser os corretos', () => {
  expect(fibonacci.gerarSequenciaFibonacci(10)).toMatchObject([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

test('os 2 primeiros números da contagem de Fibonacci devem ser 0 e 1', () => {
  expect(fibonacci.gerarSequenciaFibonacci(2)).toMatchObject([0, 1]);
});
