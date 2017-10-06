/* 
  Description ⚔️
    Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

  Examples:
    // returns "theStealthWarrior"
    toCamelCase("the-stealth-warrior") 
    
    // returns "TheStealthWarrior"
    toCamelCase("The_Stealth_Warrior")
*/

// Long solution
function toCamelCase(string) {
  const newString = string.split(/[-_]/g)

  if (newString[0].charAt(0) !== newString[0].charAt(0).toUpperCase()) {
    const result = newString
      .slice(1)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))

    return [newString[0], ...result].join('')
  } else {
    const result = newString
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('')
    return result
  }
}

// Short Solution
function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, char) => char.toUpperCase())
}

// Test to pass
console.log(toCamelCase('the-stealth-warrior')) // => It should return "theStealthWarrior"
console.log(toCamelCase('The_Stealth_Warrior')) // => It should return "TheStealthWarrior"
