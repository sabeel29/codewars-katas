/*
  Title:
    Excessively Abundant Numbers

  Description:
    An abundant number or excessive number is a number for which the sum of its proper divisors is greater than the number itself.
    The integer 12 is the first abundant number. Its proper divisors are 1, 2, 3, 4 and 6 for a total of 16 (> 12).
    Derive function abundantNumber(num)/abundant_number(num) which returns true/True/.true. if num is abundant, false/False/.false. if not.

  Kata Link:
    https://www.codewars.com/kata/excessively-abundant-numbers

  Discuss Link:
    https://www.codewars.com/kata/excessively-abundant-numbers/discuss

  Solutions Link:
    https://www.codewars.com/kata/excessively-abundant-numbers/solutions
*/

// Long Solution
const findDivisors = num =>
  Array.from({ length: num - 1 }, (_, index) => (num % (index + 1) === 0 ? index + 1 : null)).filter(Boolean)

const sumDivisors = num => findDivisors(num).reduce((total, divisor) => total + divisor, 0)

const abundantNumber = num => sumDivisors(num) > num

// Function Export
module.exports = abundantNumber
