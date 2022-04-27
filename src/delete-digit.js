const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  
  // remove line with error and write your code here
    
  let numToStr = n.toString().split('');
  let newArr = [];
  
  for (let i = 0; i < numToStr.length; i++) {
    let newNum = numToStr.slice(0, i).concat(numToStr.slice(i+1));
   newArr.push(+newNum.join(''));
}
 return Math.max(...newArr);
}

module.exports = {
  deleteDigit
};
