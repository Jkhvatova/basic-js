const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(doNotReverse) {
    this.doNotReverse = doNotReverse;
  }
   convertLetterToPos(phrase, result) {
       phrase.toUpperCase().split('').forEach(letter => {
      if(letter.toLowerCase() === letter.toUpperCase()) {
        result.push(letter);
      } else {
        letter = letter.charCodeAt(0) - 64;
        result.push(letter);
      }
    });
   }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let codedMessage = [];
    let keyLetters = [];
    let result = [];
    
    this.convertLetterToPos(message, codedMessage);
    this.convertLetterToPos(key, keyLetters);
   
   for(let i = 0, j = 0; i < codedMessage.length; i++) {
     if(typeof codedMessage[i] === 'number') {
       let newIndex = (codedMessage[i] + keyLetters[j % keyLetters.length]) % 26;
       let newLetter;
       if (newIndex  <= 0) {
        newLetter = String.fromCharCode(newIndex + 89);
       } else {
        newLetter = String.fromCharCode(newIndex + 63);
       }
        result.push(newLetter);
        j++;
     } else {
       result.push(codedMessage[i]);
     }
   }
   if (this.doNotReverse === false) {
    return result.reverse().join('');
   } else {
     return result.join('');
   }
  }
  
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    console.log(message);
    let decodedMessage = [];
    let keyLetters = [];
    let result = [];
    
     this.convertLetterToPos(message, decodedMessage);
    this.convertLetterToPos(key, keyLetters);
    
    for(let i = 0, j = 0; i < decodedMessage.length; i++) {
     if(typeof decodedMessage[i] === 'number') {
       let newIndex = (decodedMessage[i] - keyLetters[j % keyLetters.length] + 26) % 26;
       let newLetter;
       if (newIndex  >= 26) {
        newLetter = String.fromCharCode(newIndex + 87);
       } else {
        newLetter = String.fromCharCode(newIndex + 65);
       }
        result.push(newLetter);
       j++;
     } else {
       result.push(decodedMessage[i]);
     }
     
  }
  if (this.doNotReverse === false) {
    return result.reverse().join('');
   } else {
     return result.join('');
   }
  }
  }
  

module.exports = {
  VigenereCipheringMachine
};
