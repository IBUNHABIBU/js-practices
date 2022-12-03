// bruteforce approach
const naiveAvgOfSubArray = (arr, k) => {
    let result = [];
    // [1, 2, 3, 4, 5]

    // [1, 2, 3]
    // [2, 3, 4]
    // [3, 4, 5]

    for(let i = 0; i<k; i ++) {
        let sum = 0
        for(let j = 0; j< k; j++) {
            sum += arr[i+j];
        }
        result.push(sum/k)
    }
    return result;
}

console.log(naiveAvgOfSubArray([1,2,3,4,5], 3))
console.log(naiveAvgOfSubArray([1,3,2,6,-1,4, 1, 8, 2], 5))



const optimalAvgOfSubArray = (arr, k) => {
    const avgs = []
    let sum = 0, windowStart = 0;
    for(let windowEnd = 0; windowEnd < arr.length; windowEnd ++) {
        sum += arr[windowEnd]
        if(windowEnd >= k-1) {
            // add the avg to the avgs array
            avgs.push(sum/k)
            // substract the integer at windowStart from the sum
            sum -= arr[windowStart]
            // move the windowStart one spot
            windowStart++
        }
    }
    return avgs;
}

console.log(optimalAvgOfSubArray([1,2,3,4,5], 3))
console.log(optimalAvgOfSubArray([1,3,2,6,-1,4, 1, 8, 2], 5))

// smallest subarray whose sum is greater or equal to s
/* 
Given an array of + numbers and target s find the length of contiguous
subarray whose sum is greater or equal to s. Return 0 if no such subarray exists. 
*/
const smallestSubarray = (arr, s) => {
    let windowStart = 0, sum = 0, minLengthSoFar = Infinity;
    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        sum += arr[windowEnd]

        while(sum >= s) {
            // shrink the window
            let currLenght = windowEnd-windowStart + 1;
            minLengthSoFar = Math.min(currLenght, minLengthSoFar)
            sum -= arr[windowStart]
            windowStart++
        }
    }

    if (minLengthSoFar === Infinity) {
        return 0
    }
    return minLengthSoFar;
}

console.log(smallestSubarray([1,3,2,2,4,5], 6))
console.log(smallestSubarray([2,1,5,2,8], 7))


/* 
Given a string, find the length of the longest substring that contains no more 
than k distinct characters 
*/
const lengthOfLongestSubstringWithKDistinctChars = (str, k) => {
    let windowStart = 0, leterFrequencies = {}, longestSubstringSoFar = 0
    for(let windowEnd = 0; windowEnd < str.length; windowEnd ++) {
        
    }
}
console.log(lengthOfLongestSubstringWithKDistinctChars("acccpbbebi", 3)) //7
console.log(lengthOfLongestSubstringWithKDistinctChars("aaaabbcccd", 1)) // 4
console.log(lengthOfLongestSubstringWithKDistinctChars("abcfg", 10)) // 5