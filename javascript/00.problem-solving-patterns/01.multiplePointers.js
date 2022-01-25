/*
 * Multiple pointer pattern is one another pattern with which we can make some O(n^2)
 * algorithms into O(n)
 *
 * in certain problems such as this where we are required to go through an array or such data set
 * and find all unique elements etc. the easy solution is using inner loop
 *
 * but it can done with having 2 different pointers to compare different indexed while a single
 * iteration of loop is running.
 */

function countUniqueValues(arr) {
  if (!arr.length) return 0;
  let uniqueValues = [arr[0]];
  for (let i = 1; i < arr.length; ) {
    if (arr[i] !== arr[i - 1]) {
      uniqueValues.push(arr[i++]);
    } else {
      while (arr[i] === arr[i - 1]) {
        i++;
      }
    }
  }
  return uniqueValues.length;
}

console.log('🚀 | countUniqueValues -----------------------------');
console.log(
  '🚀 | countUniqueValues([1, 1, 1, 1, 1, 2])',
  countUniqueValues([1, 1, 1, 1, 1, 2])
);
console.log(
  '🚀 | countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])',
  countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])
);
console.log('🚀 | countUniqueValues([])', countUniqueValues([]));
console.log(
  '🚀 | countUniqueValues([-2, -1, -1, 0, 1])',
  countUniqueValues([-2, -1, -1, 0, 1])
);

/*
  Multiple Pointers - averagePair

  Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target. 
  
  Bonus Constraints: Time: O(N) Space: O(1) 
  
  Sample Input:
  averagePair([1,2,3],2.5) // true 
  averagePair((1,3,3,5,6,7,10,12, 19],8) // true
  averagePair((-1,2,3,4,5,6], 4.1) // false
  averagePair([],4) // false 
 */

function averagePair(arr, avg) {
  if (!arr.length) return false;
  let a = 0;
  let b = arr.length - 1;
  while (a < b) {
    let currentAvg = (arr[a] + arr[b]) / 2;
    if (currentAvg === avg) {
      return true;
    } else if (currentAvg > avg) {
      b--;
    } else {
      a++;
    }
  }
  return false;
}

console.log('🚀 | averagePair ---------------------------------------------');
console.log('🚀 | averagePair([1, 2, 3], 2.5)', averagePair([1, 2, 3], 2.5));
console.log(
  '🚀 | averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)',
  averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)
);
console.log(
  '🚀 | averagePair([-1, 0, 3, 4, 5, 6], 4.1)',
  averagePair([-1, 0, 3, 4, 5, 6], 4.1)
);
console.log('🚀 | averagePair([], 4)', averagePair([], 4));

/*
  Multiple Pointers - isSubSequence

  Write a function called isSubSequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

  Examples:
  isSubSequence('hello', 'hello world'); // true 
  isSubSequence('sing', 'sting'); // true 
  isSubSequence('abc', 'abracadabra'); // true 
  isSubSequence('abc', 'acb'); // false (order matters)
 */

function isSubSequence(strA, strB) {
  let i = 0;
  let j = 0;
  if (!strA) return true;
  while (j < strB.length) {
    if (strA[i] === strB[j]) i++;
    if (i === strA.length) return true;
    j++;
  }
  return false;
}

console.log('🚀 | isSubSequence ------------------------------------------');
console.log(
  '🚀 | isSubSequence("hello", "hello world")',
  isSubSequence('hello', 'hello world')
);
console.log(
  '🚀 | isSubSequence("sing", "sting")',
  isSubSequence('sing', 'sting')
);
console.log(
  '🚀 | isSubSequence("abc", "abracadabra")',
  isSubSequence('abc', 'abracadabra')
);
console.log('🚀 | isSubSequence("abc", "acb")', isSubSequence('abc', 'acb'));
