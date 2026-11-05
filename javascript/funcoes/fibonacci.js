/**
 * Gera a sequência de Fibonacci até n termos.
 * @param {number} n - Quantidade de termos
 * @returns {number[]}
 */
function gerarSequenciaFibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  
  const seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq;
}

/**
 * Retorna o n-ésimo termo da sequência de Fibonacci (índice 0).
 * @param {number} n
 * @returns {number}
 */
function obterNesimoFibonacci(n) {
  if (n < 0) return NaN;
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

module.exports = { gerarSequenciaFibonacci, obterNesimoFibonacci };
