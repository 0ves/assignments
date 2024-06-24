/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let arr = [...str.toUpperCase()];
  let arrNoSpace = arr
    .map((element) => (["!", ",", ".", "?"].includes(element) ? "" : element))
    .filter((char) => char.trim() !== "");

  console.log(arrNoSpace);

  for (let i = 0; i < Math.floor(arrNoSpace.length / 2); i++) {
    // console.log(Math.floor(arr.length/2));
    const element1 = arrNoSpace[i];
    const element2 = arrNoSpace.slice(-i - 1)[0];
    // console.log("element 1 "+arr[i]);
    // console.log(arr.slice(-i-1)[0]);

    if (element1 !== element2) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("Able, was I ere I saw Elba!"));

module.exports = isPalindrome;
