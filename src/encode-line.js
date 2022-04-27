const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // remove line with error and write your code here
  let arr = [];
  let counter = 1;

for(let i = 0; i < str.length; i++) {
  if(str[i] === str[i+1]) {
      counter++;
  } else {
      arr.push([counter, str[i]]);
      counter = 1;
  }
}
let result = arr.flat().join('').split('1').join('');
return result;
}

module.exports = {
  encodeLine
};
