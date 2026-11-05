/**
 * Calcula o Máximo Divisor Comum (MDC / GCD) entre dois números inteiros a e b
 * usando o Algoritmo de Euclides.
 * 
 * @param {number} a
 * @param {number} b
 * @returns {number} O maior inteiro que divide a e b
 */
function maximoDivisorComum(a, b) {
  a = Math.abs(Math.trunc(a));
  b = Math.abs(Math.trunc(b));

  while (b !== 0) {
    const resto = a % b;
    a = b;
    b = resto;
  }
  return a;
}

/**
 * Calcula o MDC de um array de números inteiros.
 * @param {number[]} arr
 * @returns {number}
 */
function mdcArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return 0;
  let resultado = Math.abs(Math.trunc(arr[0]));
  for (let i = 1; i < arr.length; i++) {
    resultado = maximoDivisorComum(resultado, arr[i]);
    if (resultado === 1) break; // O menor MDC possível para inteiros é 1
  }
  return resultado;
}

module.exports = { maximoDivisorComum, mdcArray };
