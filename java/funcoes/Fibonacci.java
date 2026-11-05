import java.util.Arrays;

public class Fibonacci {

    /**
     * Gera a sequência de Fibonacci até n termos.
     * @param n Quantidade de termos
     * @return Array contendo a sequência
     */
    public static long[] gerarSequencia(int n) {
        if (n <= 0) return new long[0];
        if (n == 1) return new long[]{0};

        long[] seq = new long[n];
        seq[0] = 0;
        seq[1] = 1;
        for (int i = 2; i < n; i++) {
            seq[i] = seq[i - 1] + seq[i - 2];
        }
        return seq;
    }

    /**
     * Calcula o n-ésimo número de Fibonacci (índice 0).
     * @param n Índice
     * @return Termo de Fibonacci
     */
    public static long obterNesimo(int n) {
        if (n < 0) return -1;
        if (n == 0) return 0;
        if (n == 1) return 1;

        long a = 0, b = 1;
        for (int i = 2; i <= n; i++) {
            long temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }

    public static void main(String[] args) {
        System.out.println("--- Sequência de Fibonacci & Termo N ---");
        System.out.println("Primeiros 10 termos: " + Arrays.toString(gerarSequencia(10)));
        System.out.println("10º termo de Fibonacci: " + obterNesimo(10));
    }
}
