//==================================================================================

// reverse of an string
function reverse(str) {
  const result = [];
  // using recursion helper
  function helper(i) {
    if (i < 0) return;
    result.push(str.charAt(i));
    helper(--i);
  }
  helper(str.length - 1);
  return result.join('');
}

// console.log('🚀 | reverse("awesome")', reverse('awesome')); // 'emosewa'
// console.log('🚀 | reverse("high school")', reverse('high school')); // 'loohcs hgih'

//==================================================================================

// check if string is a palindrome
function isPalindrome(str) {
  let reverse = [];
  function helper(i) {
    if (i < 0) return;
    reverse.push(str.charAt(i));
    helper(--i);
  }
  helper(str.length - 1);
  return str === reverse.join('');
}

// console.log("🚀 | isPalindrome('awesome')", isPalindrome('awesome'));
// console.log("🚀 | isPalindrome('foobar')", isPalindrome('foobar'));
// console.log("🚀 | isPalindrome('tacocat')", isPalindrome('tacocat'));
// console.log(
//   "🚀 | isPalindrome('amanaplanacanalpanama')",
//   isPalindrome('amanaplanacanalpanama')
// );
// console.log(
//   "🚀 | isPalindrome('amanaplanacanalpandemonium')",
//   isPalindrome('amanaplanacanalpandemonium')
// );

//==================================================================================

// flatten an array
let flatArr = [];
function flatten0(arr) {
  function helper(i) {
    if (i === arr.length) return;
    if (!Array.isArray(arr[i])) flatArr.push(arr[i]);
    if (Array.isArray(arr[i]) && arr[i].length > 0) flatten(arr[i]);
    helper(i + 1);
  }
  helper(0);
  return flatArr;
}

// OR

function flatten1(arr) {
  let flatArr = [];
  for (let i of arr) {
    if (Array.isArray(i)) {
      flatArr = flatArr.concat(flatten(i));
    } else {
      flatArr.push(i);
    }
  }
  return flatArr;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

//==================================================================================
