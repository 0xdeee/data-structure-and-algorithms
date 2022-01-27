/**
 * picks and index and trace back till start of the array once correct place to element is found
 * it shift all the subsequent element to one index right and inserts the value at the correct index
 *
 * this works well with almost sorted datasets
 */

function insertionSort(arr) {
  let i, j;
  for (i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}

console.log(
  '🚀 | insertionSort([2, 1, 9, 76, 4])',
  insertionSort([2, 1, 9, 76, 4])
);
