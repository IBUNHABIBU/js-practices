console.log("****************** TABULATION   ***************************")
console.log("***************** canConstruct *************************")
// write a function canConstruct(target, wordBank) that accepts accepts a target string and array of string
// The function should return a boolean indicating whether or not the target can be constructed by concatenating 
// elements of the wordbank array 
const canConstruct = (target, wordBank, memo= {}) => {
 const table = Array(target + 1 ).fill(false)
 table[0]  = true;
  for(let i = 0; i<= target.length; i++) {
   if(table[i] === true) {
    
   }
  }
}
console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(canConstruct('enterapotentpot', ['a','p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(canConstruct('eleuteliusegdiusgangatasjinjajinja', ['ele', 'telius', 'egdius', 'u', 'gangatas', 'jinja']));
