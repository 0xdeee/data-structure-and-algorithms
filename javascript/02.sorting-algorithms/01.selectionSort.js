/**
 * pick and index and loops through all the elements in the array and find the lowest match -> swap it
 * It works by finding & swapping best possible value to the selected index
 *
 * this is also works better with almost sorted arrays!
 */

function selectionSort(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) min = j;
      count++;
    }
    if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  console.log('🚀 | selectionSort | count', count);
  return arr;
}

console.log(
  '🚀 | selectionSort([5, 3, 9, 1, 4, 2, 6, 8, 7, 0])',
  selectionSort([5, 3, 9, 1, 4, 2, 6, 8, 7, 0])
);

console.log(
  '🚀 | selectionSort([0, 1, 2, 3, 4, 5, 9, 8, 7, 6])',
  selectionSort([0, 1, 2, 3, 4, 5, 9, 8, 7, 6])
);
