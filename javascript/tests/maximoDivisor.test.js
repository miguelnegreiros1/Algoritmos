const maximoDivisor = require('../funcoes/maximoDivisor');

test('deve calcular corretamente o MDC entre dois números inteiros (48 e 18)', () => {
  expect(maximoDivisor.maximoDivisorComum(48, 18)).toBe(6);
});

test('deve calcular corretamente o MDC de um array de números inteiros ([24, 36, 60])', () => {
  expect(maximoDivisor.mdcArray([24, 36, 60])).toBe(12);
});
