const quicksort = require('../funcoes/quicksort');

test('deve ordenar corretamente um array desordenado', () => {
  expect(quicksort.quicksort([34, 7, 23, 32, 5, 62, 1, 9, 5, 0, -3]))
    .toMatchObject([-3, 0, 1, 5, 5, 7, 9, 23, 32, 34, 62]);
});

test('deve manter a ordem de um array que já está ordenado', () => {
  expect(quicksort.quicksort([1, 2, 3, 4, 5]))
    .toMatchObject([1, 2, 3, 4, 5]);
});
