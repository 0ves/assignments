/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let string1 = [...str1.toLowerCase()];
  let string2 = [...str2.toLowerCase()];
  let isMatch = true;
  if (string1.length > string2.length) {
    console.log(string1);
    console.log(string2);
    
    for (let i = 0; i < string1.length; i++) {
      if (isMatch == true) {
        const element = string1[i];
        for (let j = 0; j < string2.length; j++) {
          if (string1[i] != string2[j]) {
            // console.log("1st-" + string1[i]);
            // console.log(string1[j]);
            isMatch = false;
            console.log("Characters do not match");
          } 
          else {
            console.log("Characters match");
            isMatch = true;
            break
          }
          console.log(isMatch);
        }
      } else {
        return isMatch;
      }
    }
  }
  else{
    for (let i = 0; i < string2.length; i++) {
      if (isMatch == true) {
   
        for (let j = 0; j < string1.length; j++) {
          
          if(string2[i]!=string1[j]){
          // console.log("1st"+string1[i]);
          // console.log(string1[j]);
            isMatch=false

          }
          else{
            isMatch= true
            break
          }
        }
      }
  else{
    return isMatch
  }
    }
  }
  return isMatch;
}
// let isit = isAnagram('openai!', 'open');

// console.log([isit]);

module.exports = isAnagram;
