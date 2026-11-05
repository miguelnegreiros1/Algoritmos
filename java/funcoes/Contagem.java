import java.util.Arrays;

public class Contagem {

    /**
     * Armazena as contagens de inteiros no intervalo numérico e elementos do array.
     */
    public static class Resultado {
        public final long contagemIntervalo;
        public final long contagemElementosArray;

        public Resultado(long contagemIntervalo, long contagemElementosArray) {
            this.contagemIntervalo = contagemIntervalo;
            this.contagemElementosArray = contagemElementosArray;
        }

        @Override
        public String toString() {
            return String.format("{ contagemIntervalo: %d, contagemElementosArray: %d }", 
                    contagemIntervalo, contagemElementosArray);
        }
    }

    /**
     * Recebe um array de números e conta quantos números inteiros existem
     * entre o primeiro e o último elemento do array de entrada.
     * 
     * @param arr Array de números
     * @return Objeto Resultado com a contagem do intervalo e dos elementos
     */
    public static Resultado contarInteirosEntrePrimeiroEUltimo(double[] arr) {
        if (arr == null || arr.length == 0) {
            return new Resultado(0, 0);
        }

        double primeiro = arr[0];
        double ultimo = arr[arr.length - 1];

        double inicio = Math.min(primeiro, ultimo);
        double fim = Math.max(primeiro, ultimo);

        // 1. Contagem no intervalo matemático estrito (inicio, fim)
        long minInt = (long) Math.floor(inicio) + 1;
        long maxInt = (long) Math.ceil(fim) - 1;
        long contagemIntervalo = Math.max(0, maxInt - minInt + 1);

        // 2. Contagem de elementos inteiros no array no intervalo (inicio, fim)
        long contagemElementosArray = 0;
        for (double num : arr) {
            if (num > inicio && num < fim && num == Math.floor(num)) {
                contagemElementosArray++;
            }
        }

        return new Resultado(contagemIntervalo, contagemElementosArray);
    }

    public static void main(String[] args) {
        double[] testeArray1 = {2.5, 7, 3, 10, 4.2, 8};
        System.out.println("--- Contagem de Inteiros entre Primeiro e Último ---");
        System.out.println("Array 1: " + Arrays.toString(testeArray1));
        System.out.println("Resultado 1: " + contarInteirosEntrePrimeiroEUltimo(testeArray1));

        double[] testeArray2 = {10, 15, 3.5, 2};
        System.out.println("Array 2: " + Arrays.toString(testeArray2));
        System.out.println("Resultado 2: " + contarInteirosEntrePrimeiroEUltimo(testeArray2));
    }
}
