public class SlidingWindowPattern {
  /**
  * sliding window patter is taking a specific subset of a larger data set and performing operation on them
  *
  * in this example we are calculating larger consecutive sum of N numbers in array we can do it through
  * inner loop and finding sum of every subset (O(n^2)) or use sliding window (O(n))
  */
  static int maxContinuousNumSum(int[] arr, int num) {
        int maxSum  = 0;
        if (arr.length < num) return -1;
        for (int i = 0; i < arr.length - num + 1; i ++) {
            int tempSum = 0;
            for (int j = 0; j < num; j++) {
                tempSum += arr[i + j];
            }
            maxSum = Math.max(tempSum, maxSum);
        }
        return maxSum;
    }

    /**
    * we can observe that in each subset we are only moving one index to right so to get the sum it doesn't
    * make sense to calculate sum of all again and again
    *
    * instead we can simply subtract the index in which we started in previous iteration and
    * add the value in index which we are including in the current iteration.
    */

    static int maxContinuousNumSumWithSlidingWindowPattern(int[] arr, int num) {
        int maxSum  = 0;
        if (arr.length < num) return -1;
        for (int i = 0; i < num; i++) {
            maxSum += arr[i];
        }
        int tempSum = maxSum;
        for (int i = num; i < arr.length; i++) {
            tempSum = tempSum - arr[i - num] + arr[i];
            maxSum = Math.max(tempSum, maxSum);
        }
        return maxSum;
    }

    public static void main(String[] args){
        System.out.println(maxContinuousNumSum(new int[] {2, 6, 9, 2, 1, 8, 5, 6, 3}, 3));
        System.out.println(maxContinuousNumSumWithSlidingWindowPattern(new int[] {2, 6, 9, 2, 1, 8, 5, 6, 3}, 3));
    }
}