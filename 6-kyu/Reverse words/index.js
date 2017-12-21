/*
  Title:
    Reverse words

  Description:
    Write a reverseWords function that accepts a string a parameter, and reverses each word in the string.
    Any spaces in the string should be retained.

  Examples:
    reverseWords("This is an example!");
     // returns  "sihT si na !elpmaxe"
    reverseWords("double  spaces");
      // returns  "elbuod  secaps"

  Link:
    https://www.codewars.com/kata/reverse-words
*/

// Long Solution
function reverseWords(str) {
  return str
    .split(' ')
    .map(word =>
      word
        .split('')
        .reverse()
        .join('')
    )
    .join(' ')
}

// Function Export
module.exports = reverseWords