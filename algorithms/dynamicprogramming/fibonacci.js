//  write a function 'fib(n)' that takes a number as an argument the function 
//  should return the nth number of a fibonacci sequence
//  

const recursiveFib = (n) => {
 if (n <= 2) return 1
 return recursiveFib(n-1) + recursiveFib(n-2)
}

console.log(recursiveFib(3));
console.log(recursiveFib(6));
console.log(recursiveFib(7));
console.log(recursiveFib(8));
console.log(recursiveFib(53));
console.log(recursiveFib(56));