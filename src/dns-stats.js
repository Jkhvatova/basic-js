const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // remove line with error and write your code here
   
  // remove line with error and write your code here
  let splitDomains = [];
  
  domains.forEach(domain => {
     splitDomains.push(domain.split(".").map(domain => '.' + domain).reverse());
  });

  let resultArr = [];
  for (let i = 0; i < splitDomains.length; i++) {
    let inner = splitDomains[i][0];
    for (let j = 0; j < splitDomains[i].length; j++) {
      resultArr.push(inner);
      inner = inner + splitDomains[i][j + 1];
    }
  }
 
  let resultObj = resultArr.reduce((acc, value) => {acc[value] = (acc[value] || 0) + 1; return acc}, {});

  return resultObj;
}

module.exports = {
  getDNSStats
};
