// ==========================================
// MÓDULO DE ALGORITMOS (JavaScript)
// ==========================================

// 1. Número Primo
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

// 2. Somatório
function calcularSomatorio(arr) {
  if (!Array.isArray(arr)) return 0;
  return arr.reduce((acc, curr) => acc + curr, 0);
}

// 3. Fibonacci
function gerarSequenciaFibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  
  const seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq;
}

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

// 4. Quicksort
function quicksort(arr) {
  if (!Array.isArray(arr)) return [];
  if (arr.length <= 1) return [...arr];

  const pivo = arr[Math.floor(arr.length / 2)];
  const menores = [];
  const iguais = [];
  const maiores = [];

  for (const item of arr) {
    if (item < pivo) {
      menores.push(item);
    } else if (item === pivo) {
      iguais.push(item);
    } else {
      maiores.push(item);
    }
  }

  return [...quicksort(menores), ...iguais, ...quicksort(maiores)];
}

// 5. Contagem de Inteiros
function contarInteirosEntrePrimeiroEUltimo(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return { contagemIntervalo: 0, contagemElementosArray: 0, primeiro: null, ultimo: null };
  }

  const primeiro = arr[0];
  const ultimo = arr[arr.length - 1];

  const inicio = Math.min(primeiro, ultimo);
  const fim = Math.max(primeiro, ultimo);

  const minInt = Math.floor(inicio) + 1;
  const maxInt = Math.ceil(fim) - 1;
  const contagemIntervalo = Math.max(0, maxInt - minInt + 1);

  const contagemElementosArray = arr.filter(
    num => Number.isInteger(num) && num > inicio && num < fim
  ).length;

  return { contagemIntervalo, contagemElementosArray, primeiro, ultimo };
}

// 6. Máximo Divisor Comum (MDC / GCD)
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

function mdcArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return 0;
  let resultado = Math.abs(Math.trunc(arr[0]));
  for (let i = 1; i < arr.length; i++) {
    resultado = maximoDivisorComum(resultado, arr[i]);
    if (resultado === 1) break;
  }
  return resultado;
}


// ==========================================
// INTERFACE DE USUÁRIO (INTERAÇÕES)
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  // Controle das Abas (Tabs)
  const tabButtons = document.querySelectorAll('.tab-btn');
  const algoCards = document.querySelectorAll('.algo-card');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      algoCards.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-target');
      document.getElementById(targetId).classList.add('active');
    });
  });

  // Funções Auxiliares de Parsing
  const parseArrayInput = (str) => {
    if (!str.trim()) return [];
    return str.split(',')
      .map(item => item.trim())
      .filter(item => item !== '')
      .map(Number)
      .filter(num => !isNaN(num));
  };

  // 1. Executar Número Primo
  document.getElementById('btn-primo').addEventListener('click', () => {
    const rawVal = document.getElementById('input-primo').value;
    const num = parseInt(rawVal, 10);
    const resBox = document.getElementById('res-primo');

    if (isNaN(num)) {
      resBox.innerHTML = `<span class="badge badge-error">Por favor, insira um número inteiro válido.</span>`;
      return;
    }

    const resultado = ePrimo(num);
    if (resultado) {
      resBox.innerHTML = `<span class="badge badge-success">O número ${num} É PRIMO! 🟢</span>`;
    } else {
      resBox.innerHTML = `<span class="badge badge-error">O número ${num} NÃO É PRIMO. 🔴</span>`;
    }
  });

  // 2. Executar Somatório
  document.getElementById('btn-somatorio').addEventListener('click', () => {
    const str = document.getElementById('input-somatorio').value;
    const arr = parseArrayInput(str);
    const resBox = document.getElementById('res-somatorio');

    if (arr.length === 0) {
      resBox.innerHTML = `<span class="badge badge-error">Insira pelo menos um número válido separado por vírgula.</span>`;
      return;
    }

    const total = calcularSomatorio(arr);
    resBox.innerHTML = `
      <div>Soma Total: <strong>${total}</strong></div>
      <div style="margin-top: 0.5rem; font-size: 0.9rem; color: var(--text-muted)">
        Valores processados: [${arr.join(', ')}]
      </div>
    `;
  });

  // 3. Executar Fibonacci
  document.getElementById('btn-fibonacci').addEventListener('click', () => {
    const n = parseInt(document.getElementById('input-fibonacci').value, 10);
    const resBox = document.getElementById('res-fibonacci');

    if (isNaN(n) || n <= 0) {
      resBox.innerHTML = `<span class="badge badge-error">Insira um número positivo maior que 0.</span>`;
      return;
    }

    const seq = gerarSequenciaFibonacci(n);
    const nth = obterNesimoFibonacci(n);

    const seqHTML = seq.map(item => `<span class="pill">${item}</span>`).join(' ');

    resBox.innerHTML = `
      <div style="margin-bottom: 0.5rem">Sequência com ${n} termos:</div>
      <div class="pill-container">${seqHTML}</div>
      <div style="margin-top: 1rem; font-size: 0.95rem;">
        Termo de índice ${n}: <strong>${nth}</strong>
      </div>
    `;
  });

  // 4. Executar Quicksort
  document.getElementById('btn-quicksort').addEventListener('click', () => {
    const str = document.getElementById('input-quicksort').value;
    const arr = parseArrayInput(str);
    const resBox = document.getElementById('res-quicksort');

    if (arr.length === 0) {
      resBox.innerHTML = `<span class="badge badge-error">Insira pelo menos um número válido.</span>`;
      return;
    }

    const sorted = quicksort(arr);
    const sortedHTML = sorted.map(item => `<span class="pill">${item}</span>`).join(' ');

    resBox.innerHTML = `
      <div style="margin-bottom: 0.5rem">Array Original: [${arr.join(', ')}]</div>
      <div>Array Ordenado:</div>
      <div class="pill-container">${sortedHTML}</div>
    `;
  });

  // 5. Executar Contagem
  document.getElementById('btn-contagem').addEventListener('click', () => {
    const str = document.getElementById('input-contagem').value;
    const arr = parseArrayInput(str);
    const resBox = document.getElementById('res-contagem');

    if (arr.length === 0) {
      resBox.innerHTML = `<span class="badge badge-error">Insira pelo menos um número válido.</span>`;
      return;
    }

    const { contagemIntervalo, contagemElementosArray, primeiro, ultimo } = contarInteirosEntrePrimeiroEUltimo(arr);

    resBox.innerHTML = `
      <div style="margin-bottom: 0.5rem">Primeiro Elemento: <strong>${primeiro}</strong> | Último Elemento: <strong>${ultimo}</strong></div>
      <div style="margin-top: 0.5rem">
        📌 Inteiros no intervalo matemático (${Math.min(primeiro, ultimo)}, ${Math.max(primeiro, ultimo)}): <strong>${contagemIntervalo}</strong>
      </div>
      <div style="margin-top: 0.25rem">
        📌 Elementos inteiros presentes no array dentro desse intervalo: <strong>${contagemElementosArray}</strong>
      </div>
    `;
  });

  // 6. Executar Máximo Divisor Comum
  document.getElementById('btn-mdc').addEventListener('click', () => {
    const str = document.getElementById('input-mdc').value;
    const arr = parseArrayInput(str);
    const resBox = document.getElementById('res-mdc');

    if (arr.length < 2) {
      resBox.innerHTML = `<span class="badge badge-error">Insira pelo menos dois números inteiros separados por vírgula.</span>`;
      return;
    }

    const mdcRes = mdcArray(arr);

    resBox.innerHTML = `
      <div>MDC de [${arr.join(', ')}] = <strong style="color: var(--accent-success); font-size: 1.3rem;">${mdcRes}</strong></div>
    `;
  });
});
