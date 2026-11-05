/**
 * Recebe um array de números e retorna a soma de todos os elementos (Sum Array).
 * @param {number[]} arr
 * @returns {number}
 */
function calcularSomatorio(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Esperado um array de números");
  }
  return arr.reduce((acc, curr) => acc + curr, 0);
}

module.exports = { calcularSomatorio };
