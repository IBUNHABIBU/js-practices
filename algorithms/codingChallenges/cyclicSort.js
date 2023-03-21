/*
/This pattern is best used for problems involving arrays
 containing numbers in a given range.
 Often this pattern is useful for determining what order the number should be in,
 missing numbers, duplicate numbers etc.
 Using this pattern we can do all the above in a maximum time complexity of O(n)
*/

/*

   Problem: 1
Given an array  of scrambled numbers from 1...n, write a function to sort the numbers
in place in O(n) time without using any extra space

   Algorithm: 
/Because we know we have all the numbers in the range of 1..n, we can loop 
through the array, swapping numbers with number in its appropriate index in the array
until we sort the entire array.
*/