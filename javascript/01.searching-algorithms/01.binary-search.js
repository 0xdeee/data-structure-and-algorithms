function binarySearch(arr, key) {
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    let mid = Math.round((start + end) / 2);
    if (arr[mid] === key) return mid;
    else if (arr[mid] > key) end = mid - 1;
    else start = mid + 1;
  }
  return -1;
}
