/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1][3, 7, 2, 9, 1][15, 27, 8, 12][-5, -10, -2, -8]
  - Output: 9
*/

function findLargestElement(numbers) {
 let   inputs=numbers
    let result=inputs[0]
    inputs.forEach((input)=>{
        // console.log(input);
        if (input > result) {
            // console.log("here");
           result = input
        }

    }
        
    )
    return result;
}
// let bit =findLargestElement([3, 7, 2, 9, 1])
// console.log(bit);
module.exports = findLargestElement;