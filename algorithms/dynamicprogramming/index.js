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