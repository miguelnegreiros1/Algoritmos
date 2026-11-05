/**
 * Recebe um array de números e conta quantos números inteiros existem
 * entre o primeiro e o último elemento do array de entrada.
 *
 * @param {number[]} arr
 * @returns {{ contagemIntervalo: number, contagemElementosArray: number }}
 */
function contarInteirosEntrePrimeiroEUltimo(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return { contagemIntervalo: 0, contagemElementosArray: 0 };
  }

  const primeiro = arr[0];
  const ultimo = arr[arr.length - 1];

  const inicio = Math.min(primeiro, ultimo);
  const fim = Math.max(primeiro, ultimo);

  // 1. Quantidade de inteiros no intervalo matemático estrito (inicio, fim)
  const minInt = Math.floor(inicio) + 1;
  const maxInt = Math.ceil(fim) - 1;
  const contagemIntervalo = Math.max(0, maxInt - minInt + 1);

  // 2. Quantidade de elementos inteiros presentes dentro do array no intervalo (inicio, fim)
  const contagemElementosArray = arr.filter(
    num => Number.isInteger(num) && num > inicio && num < fim
  ).length;

  return { contagemIntervalo, contagemElementosArray };
}

module.exports = { contarInteirosEntrePrimeiroEUltimo };
