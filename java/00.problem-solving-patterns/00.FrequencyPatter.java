import java.util.HashMap;
import java.util.Map;

/**
 * generally in problems to check if two string are anagram or if two arrays have
 * same elements in different order etc...
 *
 * our go to solution will be to use inner loops and check every inner loop value for each
 * outer loop iteration, but this brings time complexity to O(n^2)
 *
 * This frequency pattern is an efficient solution in this scenario. counting all the elements
 * and their frequencies and comparing them to each other will bring down
 * time complexity to O(n)
 */

public class FrequencyCounter {
    static boolean validAnagram (String a, String b) {
        if (a.length() != b.length()) return false;
        // frequency counters with Map
        Map<Character, Integer> mapA = new HashMap<>();
        Map<Character, Integer> mapB = new HashMap<>();
        for (char character : a.toCharArray()) {
            if (mapA.containsKey(character)) {
                mapA.put(character, mapA.get(character) + 1);
            } else {
                mapA.put(character, 1);
            }
        }
        for (char character : b.toCharArray()) {
            if (mapB.containsKey(character)) {
                mapB.put(character, mapB.get(character) + 1);
            } else {
                mapB.put(character, 1);
            }
        }
        for (Map.Entry m : mapB.entrySet()) {
            if (!mapA.containsKey(m.getKey())) return false;
            if (mapA.get(m.getKey()) != m.getValue()) return false;
        }
        return true;
    }
    public static void main(String[] args) {
        System.out.println(validAnagram("", "")); // true
        System.out.println(validAnagram("aaz", "zza")); // false
        System.out.println(validAnagram("anagram", "nagaram")); // true
        System.out.println(validAnagram("rat", "car")); // false
        System.out.println(validAnagram("awesome", "awesom")); // false
        System.out.println(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
        System.out.println(validAnagram("qwerty", "qeywrt")); // true
        System.out.println(validAnagram("texttwisttime", "timetwisttext")); // true
    }
}