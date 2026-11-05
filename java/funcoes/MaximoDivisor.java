import java.util.Arrays;

public class MaximoDivisor {

    /**
     * Calcula o Máximo Divisor Comum (MDC / GCD) entre dois inteiros a e b
     * utilizando o Algoritmo de Euclides.
     * 
     * @param a Primeiro inteiro
     * @param b Segundo inteiro
     * @return Maior inteiro positivo que divide a e b
     */
    public static long calcularMDC(long a, long b) {
        a = Math.abs(a);
        b = Math.abs(b);

        while (b != 0) {
            long resto = a % b;
            a = b;
            b = resto;
        }
        return a;
    }

    /**
     * Calcula o MDC de um array de inteiros.
     * @param arr Array de inteiros
     * @return MDC de todos os elementos
     */
    public static long calcularMDCArray(long[] arr) {
        if (arr == null || arr.length == 0) return 0;
        long resultado = Math.abs(arr[0]);
        for (int i = 1; i < arr.length; i++) {
            resultado = calcularMDC(resultado, arr[i]);
            if (resultado == 1) break;
        }
        return resultado;
    }

    public static void main(String[] args) {
        System.out.println("--- Máximo Divisor Comum (MDC / GCD) ---");
        System.out.println("MDC(48, 18): " + calcularMDC(48, 18));   // 6
        System.out.println("MDC(100, 25): " + calcularMDC(100, 25)); // 25
        System.out.println("MDC(17, 13): " + calcularMDC(17, 13));   // 1
        
        long[] numeros = {24, 36, 60};
        System.out.println("MDC do Array " + Arrays.toString(numeros) + ": " + calcularMDCArray(numeros)); // 12
    }
}
