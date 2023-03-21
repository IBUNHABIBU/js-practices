/*
/This pattern is best used for problems involving arrays
 containing numbers in a given range.
 Often this pattern is useful for determining what order the number should be in,
 missing numbers, duplicate numbers etc.
 Using this pattern we can do all the above in a maximum time complexity of O(n)
*/

/*
/Because we know we have all the numbers in the range of 1..n, we can loop 
through the array, swapping numbers with number in its appropriate index in the array
until we sort the entire array.
*/