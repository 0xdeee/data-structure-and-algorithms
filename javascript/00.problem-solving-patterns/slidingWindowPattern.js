/**
 * sliding window patter is taking a specific subset of a larger data set and performing operation on them
 *
 * in this example we are calculating larger consecutive sum of N numbers in array we can do it through
 * inner loop and finding sum of every subset (O(n^2)) or use sliding window (O(n))
 */

function maxContinuousNumSum(arr, num) {
  let maxSum = 0;
  if (num > arr.length) {
    return null;
  }
  for (let i = 0; i < arr.length - num + 1; i++) {
    let tempSum = 0;
    for (let j = 0; j < num; j++) {
      tempSum += arr[i + j];
    }
    maxSum = tempSum > maxSum ? tempSum : maxSum;
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

function maxContinuousNumSumWithSlidingWindowPattern(arr, num) {
  let maxSum = 0;
  if (num > arr.length) {
    return null;
  }
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  let tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = tempSum > maxSum ? tempSum : maxSum;
  }
  return maxSum;
}

console.log(maxContinuousNumSum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
console.log(
  maxContinuousNumSumWithSlidingWindowPattern([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)
);
