import java.util.Arrays;

public class Somatorio {

    /**
     * Recebe um array de números e retorna a soma de todos os elementos.
     * @param arr Array de números
     * @return Soma total
     */
    public static double calcular(double[] arr) {
        if (arr == null) return 0.0;
        double total = 0.0;
        for (double num : arr) {
            total += num;
        }
        return total;
    }

    public static void main(String[] args) {
        double[] arrayExemplo = {10.0, 20.5, 30.0, -5.0, 4.5};
        System.out.println("--- Somatório ---");
        System.out.println("Array: " + Arrays.toString(arrayExemplo));
        System.out.println("Soma Total: " + calcular(arrayExemplo));
    }
}
