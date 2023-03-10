// /*
// Given an array of sorted numbers and target sum. Find a pair
// in an array whose sum is equal to the given target 
// */

const findPairNaive = (arr, target) => {
    let result = []
    let sum = 0
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            sum = arr[i] + arr[j]
            if(sum === target) {
                result = [arr[i], arr[j]]
                return result;
            }
        }
    }
}
console.log("***************  find pair naive ************************8")
console.log(findPairNaive([1,2,3,4,5], 7))
console.log(findPairNaive([1,6,8,9,10], 14))

// Using two pointers
const findPair = (arr, target) => {
    let leftPointer = 0, rightPointer = arr.length - 1, pair = null
    while(leftPointer !== rightPointer) {
        sum = arr[leftPointer] + arr[rightPointer]
        if(sum === target) {
            pair = [arr[leftPointer], arr[rightPointer]]
            break;
        } else if(sum > target) {
            rightPointer--
        } else {
            leftPointer++
        }
    }
    return pair;
}

console.log("***************  find pair  ************************8")
console.log(findPair([1,2,3,8,9], 7))
console.log(findPair([1,6,8,9,10], 14))

/*
given an array of unsorted number. Find all unique triplets in it that add up to zero 
[-3, 0, 1, 2, -1, 1, -2]

ans: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
*/
/*Algorithm
1. sort the array
    [-3, -2, -1, 0, 1, 1, 2]
2. iterate through the array
3. take the negative of the current element as targetsum
            i.e arr[0] = -3, targetsum = 3
        b. look for the pair of int that add up to targetsum using two pointers
            as we did in the previous problem

 */

const findTriplets = (arr) => {
    arr.sort((a,b) => a-b)
    const result = []
    for(let i=0; i<arr.length; i++) {
        let tempTarget = -arr[i]
        let leftPointer = i+1, rightPointer = arr.length - 1
        while(leftPointer < rightPointer) {
           const currSum = arr[leftPointer] + arr[rightPointer]
              if(currSum === tempTarget) {
                result.push([arr[i], arr[leftPointer], arr[rightPointer]])
                leftPointer++
                rightPointer--
              } else if (currSum < tempTarget) {
                leftPointer++
              } else {
                rightPointer--
              }
        }
    }
    return result;
 }

console.log("***************  find triplets  ************************8")
console.log(findTriplets([-3, 0, 1, 2, -1, 1, -2]))
console.log(findTriplets([-5, 2, -1, -2, 3]))


/*
Given an array of unsorted numbers. Find the length of the smallest subarray that when sorted
will sort the whole array
[1, 3, 2, 0, -1, 7, 10]
*/
/* 
Algorithm
  1. Initialize leftPointer at the start of the array and rightPointer at the end of the array
  2. Walk leftPointer forward until you get an element that is less than the previous element
  3. Walk rightPointer backward until you get an element that is greater than the previous element
  4. Find the minimum and maximum of the subarray between leftPointer and rightPointer
  5. Extend the subarray to include any number which is bigger than the minimum of the subarray
  6. Extend the subarray to include any number which is smaller than the maximum of the subarray
*/

const findSmallestSubarray = (arr) => {
    let left = 0, right = arr.length - 1

}

console.log("Find smallest subarray that when sorted will sort the whole array")
