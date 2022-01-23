/**
 * Multiple pointer pattern is one another pattern with which we can make some O(n^2)
 * algorithms into O(n)
 *
 * in certain problems such as this where we are required to go through an array or such data set
 * and find all unique elements etc. the easy solution is using inner loop
 *
 * but it can done with having 2 different pointers to compare different indexed while a single
 * iteration of loop is running.
 */

public class MultiplePointers {
    static int countUniqueValues(int[] arr) {
        if (arr.length == 0) return 0;
        int uniqueValues = 1;
        for (int i = 1; i < arr.length;) {
            if (arr[i] != arr[i - 1]) {
                uniqueValues++;
                i++;
            } else {
                while (arr[i] == arr[i - 1]) {
                    i++;
                }
            }
        }
        return uniqueValues;
    }
    public static void main(String[] args){
        System.out.println(countUniqueValues(new int[] {1, 1, 1, 1, 1, 2}));
        System.out.println(countUniqueValues(new int[] {1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13}));
        System.out.println(countUniqueValues(new int[] {}));
        System.out.println(countUniqueValues(new int[] {-2, -1, -1, 0, 1}));
    }
}
