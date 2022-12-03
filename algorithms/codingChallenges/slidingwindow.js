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
    
}

console.log(optimalAvgOfSubArray([1,2,3,4,5], 3))
console.log(optimalAvgOfSubArray([1,3,2,6,-1,4, 1, 8, 2], 5))
