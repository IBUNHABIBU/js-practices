//  write a function 'fib(n)' that takes a number as an argument the function 
//  should return the nth number of a fibonacci sequence

console.log("****************** Dynamic programming *****************")
console.log("****************** Using memoisation *****************")
// 1. Make it work using recursion with simple test case
//    - visualize that problem as tree
//     - implement the tree using recursion 
//     - the tree leaves are the base cases
//     - test it with small inputs, larger inputs will take long time
// 2. Make it efficient using memoisation
//     - add memo object/ hashmap
//      - add base case to return memo values
//      - store return value into the memo
console.log("***************** Fibonacci sequence *************************")

// recursive method
const recursiveFib = (n) => {
 if (n <= 2) return 1
 return recursiveFib(n-1) + recursiveFib(n-2)
}

// using dynamicprogramming 
const fib = (n, memo = {}) => {
   if (n in memo ) return memo[n];
   if (n <= 2) return 1
   memo[n] = fib(n-1, memo) + fib(n-2, memo)
   return memo[n]
}

console.log(recursiveFib(3));
console.log(recursiveFib(6));
console.log(recursiveFib(7));
console.log(recursiveFib(8));
console.log(fib(53));
console.log(fib(56));
console.log("")
console.log("***************** Grid Traveller *************************")

/* Say that you are a traveller on a 2D grid. You begin in the top left corner your 
goal is to travel to the bottom right corner. You may only move down or right.D */

/* In how many ways can you travel to the goal on a grid with m * n dimensions */

//  solution using recursion
const gridTravelerRecursive = (m, n) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  // going down + going right
  return gridTravelerRecursive(m-1, n) + gridTravelerRecursive(m, n-1)
}

const gridTraveler = (m, n, memo = {}) => {
  const key = m + "," + n
  if (key in memo ) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  // going down + going right
  memo[key] = gridTraveler(m-1, n, memo) + gridTraveler(m, n-1, memo)
  return memo[key];
}

console.log(gridTravelerRecursive(3,3))
console.log(gridTravelerRecursive(4,7))
console.log(gridTraveler(4,7))

console.log("")
console.log("***************** canSum *************************")
// write a function canSum(target, numbers) that takes in target sum and array of numbers as argument
// The function should return a bolean indicating wheather or not it is possible 
// canSum(7, [2,4,3,7]) true

const canSum = (target, numbers, memo = {} ) => {
  if(target in memo ) return memo[target];
  if (target === 0) return true;
  if (target < 0 ) return false;

  for (let num of numbers) {
    const remainder = target - num;
    if(canSum(remainder, numbers, memo) === true) {
      memo[target] = true;
      return true;
    }
  }
  memo[target] = false;
  return false
}

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [2,4,3,7]));
console.log(canSum(300, [7, 14]));

console.log("******************** How Sum **********************");

const howSum = (target, numbers, memo = {}) => {
  if(target in memo ) return memo[target];
  if(target === 0) return [];
  if(target < 0) return null;
  for(let num of numbers) {
    const remainder = target - num;
    const result = howSum(remainder, numbers, memo);
    if(result !== null ){
      memo[target] = [...result, num];
      return memo[target];
    }
  }
  memo[target] = null;
  return null;
}
console.log(howSum(7, [2, 3]));
console.log(howSum(7, [4,3,7]));
console.log(howSum(60, [7, 11]));
console.log(howSum(300, [7, 14]));

console.log("")
console.log("***************** bestSum *************************")
// write a function bestSum(target, numbers) that takes in target sum and array of numbers as argument
// The function should return a shortest combination of numbers that add up to the target 
// if there is a tie you may return any one
// bestSum(7, [2,4,3,7]) true
const bestSum = (target, numbers, memo = {}) => {
  if(target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;
  let shortestCombination = null;

  for(let num of numbers) {
    const remainder = target - num;
    const remainderCombination = bestSum(remainder, numbers, memo);
    if(remainderCombination !== null) {
      const combination = [...remainderCombination, num];
      if(shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination;
      }
    
    }
  }
  memo[target] = shortestCombination;
  return shortestCombination;
}
console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5, 7, 11]));
console.log(bestSum(100, [1, 2, 5, 25]));

console.log("")
console.log("***************** canConstruct *************************")
// write a function canConstruct(target, wordBank) that accepts accepts a target string and array of string
// The function should return a boolean indicating whether or not the target can be constructed by concatenating 
// elements of the wordbank array 
const canConstruct = (target, wordBank, memo= {}) => {
  if(target in memo) return memo[target];
  if(target === '') {
    return true
  }

  for (let word of wordBank) {
    if(target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if(canConstruct(suffix, wordBank, memo) === true){
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
}
console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(canConstruct('enterapotentpot', ['a','p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(canConstruct('eleuteliusegdiusgangatasjinjajinja', ['ele', 'telius', 'egdius', 'u', 'gangatas', 'jinja']));

console.log("")
console.log("***************** howcanConstruct *************************")
// write a function howConstruct(target, wordBank) that accepts accepts a target string and array of string
// The function should return the numbers of ways that the target can be constructed by concatenating 
// elements of the wordbank array 

const howCanConstruct = (target, wordBank, memo = {}) => {
  if(target in memo) return memo[target];
  if(target === '') return 1;
  let totalCount = 0;
  for(let word of wordBank) {
    if(target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
     const numberOfWays = howCanConstruct(suffix, wordBank, memo);
     totalCount += numberOfWays;
    }
  }
  memo[target] = totalCount;
  return totalCount;
}


console.log(howCanConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(howCanConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(howCanConstruct('enterapotentpot', ['a','p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(howCanConstruct('eleuteliusegdiusgangatasjinjajinja', ['ele', 'telius', 'egdius', 'u', 'gangatas', 'jinja']));

console.log("")
console.log("***************** howcanConstruct *************************")
// write a function AllConstruct(target, wordBank) that accepts accepts a target string and array of string
// The function should return a 2D array containing all of the ways that the target can be constructed by concatenating 
// elements of the wordbank array. Each element of the 2D array should represent one combination that construct the target
// we can reuse element of wordbank as many times as you need

const allConstruct = (target, wordBank, memo = {}) => {
  if(target in memo ) return memo[target];
  const result = [];
  if (target === '') return [[]];

  for(let word of wordBank) {
    if(target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank, memo);
      const targetWays = suffixWays.map( way => [word, ...way]);
      result.push(...targetWays);
    }
  }
  memo[target] = result;
  return result;
}


console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(allConstruct('enterapotentpot', ['a','p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(allConstruct('eleuteliusegdiusgangatasjinjajinja', ['ele', 'telius', 'egdius', 'u', 'gangatas', 'jinja']));


console.log("****************************TABULATION***************************");
console.log("****************************FIBONACCI NUMBER TABULATION***************************");

const fibTab = (number) => {
  const table = Array(number+1).fill(0);
  table[1] = 1;
  for(let i = 0; i<=number; i++) {
    table[i+1] += table[i];
    table[i+1] += table[i];
  }
  return table[number];
}

console.log(fibTab(6));
console.log(fibTab(60));

console.log("****************************TABULATION***************************");
console.log(fibTab(60));