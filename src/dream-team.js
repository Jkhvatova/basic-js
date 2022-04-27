const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // remove line with error and write your code here
  if (!Array.isArray(members)) return false;
  let name = [];
  console.log(members);
 members.forEach(member => {
   if (typeof member === 'string') {
    name.push(member.replace(/\s/g, "").charAt(0).toUpperCase());
   } else {
     name.push('');
   }
 });
 
 let secretName = name.sort((a, b) => a.localeCompare(b)).join('');
 console.log(secretName);
 return secretName;
}

module.exports = {
  createDreamTeam
};
