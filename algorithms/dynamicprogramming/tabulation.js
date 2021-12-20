console.log("****************** TABULATION   ***************************")
console.log("***************** canConstruct *************************")
// write a function canConstruct(target, wordBank) that accepts accepts a target string and array of string
// The function should return a boolean indicating whether or not the target can be constructed by concatenating 
// elements of the wordbank array 
const canConstruct = (target, wordBank) => {
 const table = Array(target.length + 1 ).fill(false)
 table[0]  = true;
  for(let i = 0; i<= target.length; i++) {
   if(table[i] === true) {
    for(let word of wordBank) {
     if(target.slice(i, i + word.length) === word) {
      table[i+word.length] = true;
     }
    }
   }
  }
  return table[target.length];
}
console.log(canConstruct('abcdef', ['cd', 'def','ab', 'abc',  'abcd']));
console.log(canConstruct('juma', ['elinu', 'kp', 'isshqu']));
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(canConstruct('enterapotentpot', ['a','p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(canConstruct('eleuteliusegdiusgangatasjinjajinja', ['ele', 'telius', 'egdius', 'u', 'gangatas', 'jinja']));

console.log("");
console.log("*************************** count Construct ********************************************")

const countConstruct = (target, wordBank) => {
  const table = Array(target.length + 1).fill(0);
  table[0] = 1;
  for(let i = 0; i <= target.length; i++) {
   for(let word of wordBank) {
     if(target.slice(i, i + word.length) === word) {
      table[i + word.length] += table[i];
     }
   }
  }
  return table[target.length];
}
console.log(countConstruct('abcdef', ['cd', 'def','ab', 'abc',  'abcd']));
console.log(countConstruct('juma', ['elinu', 'kp', 'isshqu']));
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(countConstruct('enterapotentpot', ['a','p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(countConstruct('eleuteliusegdiusgangatasjinjajinja', ['ele', 'telius', 'egdius', 'u', 'gangatas', 'jinja']));

console.log("");
console.log("*********************** All Can construct **************************")
const allCanConstruct = (target, wordBank) => {
 const table = Array(target.length + 1).fill().map(() => []);
 table[0] = [[]];
 for(let i = 0; i <= target.length; i++) {
  for(let word of wordBank) {
    if(target.slice(i, i + word.length) === word) {
     const newCombination = table[i].map(subArr => [...subArr, word]);
     table[i + word.length].push(...newCombination);
    }
  }
 }
 return table[target.length];
}
console.log(allCanConstruct('abcdef', ['cd', 'def','ab', 'abc',  'abcd']));
console.log(allCanConstruct('juma', ['elinu', 'kp', 'isshqu']));
console.log(allCanConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(allCanConstruct('enterapotentpot', ['a','p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(allCanConstruct('eleuteliusegdiusgangatasjinjajinja', ['ele', 'telius', 'egdius', 'u', 'gangatas', 'jinja']));
