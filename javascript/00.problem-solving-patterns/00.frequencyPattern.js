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

function validAnagram(a, b) {
  // frequency counters
  let stringA = {};
  let stringB = {};
  if (a.length !== b.length) return false;
  for (let character of a.split('')) {
    stringA[character] = stringA[character] ? ++stringA[character] : 1;
  }
  for (let character of b.split('')) {
    stringB[character] = stringB[character] ? ++stringB[character] : 1;
  }
  for (let character in stringB) {
    if (!stringA[character]) return false;
    if (stringA[character] !== stringB[character]) return false;
  }
  return true;
}

console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true
