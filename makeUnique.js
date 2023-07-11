/*Write a js function to remove all duplciate letters from a provided string. The string will only contail lowercase letters between a - z. The string will not contain spaces.

For example:

>>> makeUnique('helloworld')
// helowrd

>>> makeUnique('iwanttoclimbamountain')
// iwantoclmbu
*/
// Write your solution below:

function makeUnique(str) {
    const seen = new Set();
    const result = [];
  
    for (const char of str) {
      if (!seen.has(char)) {
        seen.add(char);
        result.push(char);
      }
    }
  
    return result.join("");
  }
  
console.log(makeUnique("helloworld")); // "helowrd"
console.log(makeUnique("iwanttoclimbamountain")); // "iwantoclmbu"
