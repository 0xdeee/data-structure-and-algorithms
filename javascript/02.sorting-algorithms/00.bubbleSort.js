/**
 * loops through & compares each element with next element and sorts if needed
 *
 * also called sinking sort as with every outer loop iteration an unsorted largest value in the set will
 * be sorted (kinda like sinking the largest one first)
 *
 * kinda good for dataset which is already almost sorted
 *
 * added hasSwapped & not comparing the last elements which are already sorted make it more efficient
 *
 */

function bubbleSort(arr) {
  let count = 0;
  // starting this from length - 1 as after every iteration largest element will be sorted
  for (let i = arr.length - 1; i > 0; i--) {
    let hasSwapped = false;
    // as the elements after 'i' are sorted we dont have to compare it again
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        hasSwapped = true;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
      count++;
    }
    if (!hasSwapped) break;
  }
  console.log('🚀 | bubbleSort | count', count);
  return arr;
}

console.log(
  '🚀 | bubbleSort([5, 3, 9, 1, 4, 2, 6, 8, 7, 0])',
  bubbleSort([5, 3, 9, 1, 4, 2, 6, 8, 7, 0])
);

console.log(
  '🚀 | bubbleSort([0, 1, 2, 3, 4, 5, 9, 8, 7, 6])',
  bubbleSort([0, 1, 2, 3, 4, 5, 9, 8, 7, 6])
);
