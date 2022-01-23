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

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
