public class MergeSort {
    static int[] merge(int[] arr1, int[] arr2) {
        int i = 0, j = 0, k = 0;
        int[] result = new int[arr1.length + arr2.length];
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                result[k++] = arr1[i++];
            } else {
                result[k++] = arr2[j++];
            }
        }
        while (i < arr1.length) {
            result[k++] = arr1[i++];
        }
        while (j < arr2.length) {
            result[k++] = arr2[j++];
        }
        return result;
    }

    static int[] mergeSort(int[] arr) {
        if (arr.length <= 1) return arr;
        int mid = (int)Math.floor(arr.length/2);
        int[] left = mergeSort(Arrays.copyOfRange(arr, 0, mid));
        int[] right = mergeSort(Arrays.copyOfRange(arr, mid, arr.length));
        return merge(left, right);
    }

    public static void main(String[] args){
        System.out.println(Arrays.toString(mergeSort(new int[]{10, 2, 24, 76, 73, 72, 1, 9})));
    }
}