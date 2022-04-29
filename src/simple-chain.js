const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  str: '',
  arr: [],
  getLength() {
    return this.str.length;
  },
  
 addLink(value) {
   value = '' + value;
    this.value = '( '  + value + ' )';
   this.arr.push(this.value);
   return this;

 },
 removeLink(position) {
  if(this.arr[position - 1] === undefined) {
    this.arr = [];
    throw new Error ('You can\'t remove incorrect link!');
  }
  this.arr.splice(position - 1, 1);
  this.str = this.arr.join("~~");
 return this;
},
 reverseChain() {
    this.arr.reverse();
  return this;
},
 finishChain() {
    this.str = this.arr.join("~~");
    this.arr = [];
    return this.str;
 }
};

module.exports = {
  chainMaker
};
