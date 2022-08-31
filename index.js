/*
  Description of actions in the for loop

  Necessary to fill array result using the following mathematical calculations
  n - number a number that is already in the resulting array -> result[]
  k - a new number to compare with the last number in the array result[] for further counting

  Calculating steps:

  1. n > k ---> n - k -> pop() from result[]
  2. n === k ---> [n, n] -> push() to result[]
  3. n < k ---> [n, k] -> push() to result[]
    
*/

const symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToInt = (numeral = "III") => {
  const splittedSymbols = numeral.split("").reverse();
  const resultOfArabicNumbers = [];

  for (let i = 0; i < splittedSymbols.length; i++) {
    if (resultOfArabicNumbers.length) {
      if (
        resultOfArabicNumbers[resultOfArabicNumbers.length - 1] >
        symbols[splittedSymbols[i]]
      ) {
        const diff =
          resultOfArabicNumbers.length &&
          resultOfArabicNumbers[resultOfArabicNumbers.length - 1] -
            symbols[splittedSymbols[i]];

        resultOfArabicNumbers.pop();
        resultOfArabicNumbers.push(diff);
      } else {
        resultOfArabicNumbers.push(symbols[splittedSymbols[i]]);
      }
    }

    if (!resultOfArabicNumbers.length) {
      resultOfArabicNumbers.push(symbols[splittedSymbols[0]]);
    }
  }

  const convertedNumber = resultOfArabicNumbers.reduce((a, b) => a + b, 0);

  return convertedNumber;
};

console.log(romanToInt("VIII"), 8);
console.log(romanToInt("CXCIII"), 193);
console.log(romanToInt("MCMXCIV"), 1994);
