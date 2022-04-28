const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // remove line with error and write your code here
  let indexArr = [];
  let numArr = [];
    const one = -1;
    let index = arr.indexOf(one);
  
      while (index != one) {
      indexArr.push(index);
      index = arr.indexOf(one, index + 1);
      }
  
  arr.forEach(num => {
    if(num !== one) {
    numArr.push(num);
}
  })
  
  numArr.sort((a, b) => a - b);
  indexArr.forEach(num => {
     numArr.splice(num, 0, one);
  })
  
return numArr;
}

module.exports = {
  sortByHeight
};
