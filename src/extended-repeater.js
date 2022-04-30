const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let inputStr = String(str);
  let addition = (options.addition !== undefined) ? String(options.addition) : '';
  let repeatTimes = (options.repeatTimes !== undefined) ? options.repeatTimes : 1;

   let additionRepeatTimes = (options.additionRepeatTimes !== undefined) ? options.additionRepeatTimes : 1;
  let additionSeparator = (options.additionSeparator !== undefined) ? options.additionSeparator : '|';
  let separator = (options.separator !== undefined) ? options.separator : '+';
  

  let separatorString = '';
  for(let i = 0; i < additionRepeatTimes; i++) {
    if(i === additionRepeatTimes - 1) {
      separatorString += addition;
    } else {
          separatorString += addition + additionSeparator;
    }
  }
  let result = '';
  for (let i = 0; i < repeatTimes; i++) {
    if(i === repeatTimes - 1) {
      result += str + separatorString;
    } else {
      result += str + separatorString + separator;
    }
  }
  return result;
}

module.exports = {
  repeater
};
