public class NumeroPrimo {

    /**
     * Verifica se um número n é primo.
     * @param n Número a ser verificado
     * @return boolean true se for primo, false caso contrário
     */
    public static boolean ePrimo(long n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 == 0 || n % 3 == 0) return false;

        for (long i = 5; i * i <= n; i += 6) {
            if (n % i == 0 || n % (i + 2) == 0) return false;
        }
        return true;
    }

    public static void main(String[] args) {
        long[] numerosTeste = {-5, 0, 1, 2, 3, 4, 17, 20, 29, 97, 100};
        System.out.println("--- Verificação de Número Primo ---");
        for (long num : numerosTeste) {
            System.out.printf("%d é primo? -> %b%n", num, ePrimo(num));
        }
    }
}
