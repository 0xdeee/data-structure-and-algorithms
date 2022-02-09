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
