/**
 * Verificação de número primo (Prime Number Checker).
 * @param {number} n
 * @returns {boolean}
 */
function ePrimo(n) {
  if (typeof n !== 'number' || isNaN(n) || !Number.isInteger(n) || n <= 1) {
    return false;
  }
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

module.exports = { ePrimo };
