import java.util.Arrays;

public class Quicksort {

    /**
     * Ordena um array de números utilizando o algoritmo Quicksort.
     * @param arr Array a ser ordenado in-place
     */
    public static void ordenar(double[] arr) {
        if (arr == null || arr.length <= 1) return;
        executarQuicksort(arr, 0, arr.length - 1);
    }

    private static void executarQuicksort(double[] arr, int low, int high) {
        if (low < high) {
            int pivoIndex = particionar(arr, low, high);
            executarQuicksort(arr, low, pivoIndex - 1);
            executarQuicksort(arr, pivoIndex + 1, high);
        }
    }

    private static int particionar(double[] arr, int low, int high) {
        double pivo = arr[high];
        int i = low - 1;

        for (int j = low; j < high; j++) {
            if (arr[j] <= pivo) {
                i++;
                double temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        double temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;

        return i + 1;
    }

    public static void main(String[] args) {
        double[] desordenado = {34, 7, 23, 32, 5, 62, 1, 9, 5, 0, -3};
        System.out.println("--- Quicksort ---");
        System.out.println("Array Desordenado: " + Arrays.toString(desordenado));
        ordenar(desordenado);
        System.out.println("Array Ordenado:   " + Arrays.toString(desordenado));
    }
}
