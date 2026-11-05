const contagem = require('../funcoes/contagem');

test('deve contar corretamente inteiros no intervalo entre o primeiro e o último elemento para o primeiro array teste', () => {
  expect(contagem.contarInteirosEntrePrimeiroEUltimo([2.5, 7, 3, 10, 4.2, 8]))
    .toMatchObject({ contagemIntervalo: 5, contagemElementosArray: 2 });
});

test('deve contar corretamente inteiros no intervalo entre o primeiro e o último elemento para o segundo array teste', () => {
  expect(contagem.contarInteirosEntrePrimeiroEUltimo([10, 15, 3.5, 2]))
    .toMatchObject({ contagemIntervalo: 7, contagemElementosArray: 0 });
});
