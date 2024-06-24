/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').
Hello, world!
  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    
    //str to array
    let arr= [...str]
    console.log(arr);
    let count = 0 
    //condition
    arr.forEach(
      (ele)=> {if (["a","e","i","o","u","A","E","I","O","U"].includes(ele)) {
        console.log(ele);
        count=count+1
      }}
    )
    return count

}
console.log( countVowels('the quick brown fox'))
module.exports = countVowels;