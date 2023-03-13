/* Given interval a and b there will be six 
different ways the two interval can relate to each other */

// 1. a and b do not overlap and a comes before b
// 2. a and b do not overlap and a comes after b
// 3. a and b overlap and a starts before b
// 4. a and b overlap and a starts after b
// 5. a contains b
// 6. b contains a

/* Given a list of intervals, merge all the overlapping intervals
 to produce a list that has only mutually exclusive intervals. */
 // [[1,4], [2,5], [7,9]] => [[1,5], [7,9]]

 // Algorithm 
    // 1. Sort the intervals by start time
    /* 2. if we reduce our scenario such that a.start <= b.start therefore we are left 
     with 4 scenarios 
        (i). a and b do not overlap and a comes before b
        (ii). a and b overlap and a starts before b
        (iii). a contains b
        (iv). b contains a but both have the same start time
    */
   // 3. In scenarion (ii), (iiu) and (iv) we merge according to the different rules
            //(ii) a.start ----> b.end
            //(iii) a.start ----> a.end
            //(iv) a.start ----> b.end
            /* if a overlaps b we need to merge them into a new interval c
              such that c.start = a.start c.end = max(a.end, b.end)  */

const mergeInterval = (intervals) => {
    //1.  sort the intervals
    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0])

    //2. create a stack to hold the merged intervals
    const mergedIntervals = [sortedIntervals.shift()]

    //3. loop through the sorted intervals
    while(sortedIntervals.length > 0){
        // always compare the last interval seen which will be 
        // the last element in the mergedIntervals stack
        // to the next available interval in the sortedIntervals
        const a = mergedIntervals.pop()
        const b = sortedIntervals.shift()

        // start time and end time of the merged interval
        const [aStart, aEnd] = a
        const [bStart, bEnd] = b

        // Our scenarios
        // (i). a and b do not overlap and a comes before b
        if(aEnd < bStart){
            mergedIntervals.push(a)
            mergedIntervals.push(b)
        } else {
            //merge a and b
            const c = []
            // c.start = a.start
            c[0] = aStart

            // c.end = max(a.end, b.end)
            c[1] = Math.max(aEnd, bEnd)

            // push c into the mergedIntervals stack
            mergedIntervals.push(c)
        }
    }
    return mergedIntervals;
}
console.log("Merge Intervals:")
console.log(mergeInterval([[1,4], [2,5], [7,9]])) // [[1,5], [7,9]]
console.log(mergeInterval([[6,7], [2,4], [5,9]])) // [[2,4], [5,9]]
console.log(mergeInterval([[1,4], [2,6], [3,5]])) // [[1,6]]
    
/* Given a list of job, each with a start time, end time,
 and CPU load(while running),
find the maximum CPU load at any time if all the jobs 
are running on the same machine. */
/* Jobs: [
    { start: 1, end: 4, cpuLoad: 3 },
    { start: 2, end: 5, cpuLoad: 4 },
    { start: 7, end: 9, cpuLoad: 6 },
]
*/
// Output: 7
// Explanation: Since [1,4] and [2,5] overlap, their maximum CPU load (3+4=7) will be when both the
// jobs are running at the same time i.e., during the time interval (2,4).

const findMaxCPULoad = (jobs) => {
    // 1. sort the jobs by start time
    const sortedJobs = jobs.sort((a, b) => a.start - b.start)

    // 2. initialize the stack to hold the merged jobs
    const firstJob = sortedJobs.shift()
    const mergedJobs = [firstJob]
    let maxCPULoadSoFar = firstJob.cpuLoad

    // 3. loop through the sorted jobs
    while(sortedJobs.length > 0){
        const a = mergedJobs.pop()
        const b = sortedJobs.shift()

        // 4. Check those 4 scenarios
        // (i). a and b do not overlap and a comes before b
        if(a.end < b.start){
            mergedJobs.push(a)
            mergedJobs.push(b)
            maxCPULoadSoFar = Math.max(maxCPULoadSoFar, b.cpuLoad)
        } else {
            // merge a and b
            const c = {}
            c.start = a.start
            c.end = Math.max(a.end, b.end)
            c.cpuLoad = a.cpuLoad + b.cpuLoad
            mergedJobs.push(c)
            maxCPULoadSoFar = Math.max(maxCPULoadSoFar, c.cpuLoad)
        }
    }
    return maxCPULoadSoFar;
}

console.log("Max CPU Load: ")

console.log(findMaxCPULoad([
    { start: 1, end: 4, cpuLoad: 3 },
    { start: 2, end: 5, cpuLoad: 4 },
    { start: 7, end: 9, cpuLoad: 6 },
    ])) // 7
console.log(findMaxCPULoad([
    { start: 6, end: 7, cpuLoad: 10 },
    { start: 2, end: 4, cpuLoad: 11 },
    { start: 8, end: 12, cpuLoad: 15 },
    ])) // 15

console.log(findMaxCPULoad([
    { start: 1, end: 4, cpuLoad: 2 },
    { start: 2, end: 4, cpuLoad: 1 },
    { start: 3, end: 6, cpuLoad: 5 },
    ])) // 8

    /* 
Problem 3.
    Given a list of intevals representing the working hours of each employee,
    Find the free interval common to all employee    
*/

const findFreeTime = (intervals) => {
    // 1. flatten the intervals
   const flattened =  intervals.flat()
    // 2. sort the flattened intervals
    const sorted = flattened.sort((a, b) => a[0] - b[0])
    // 3. initialize the stack to hold the merged intervals
    const mergedIntervals = [sorted.shift()]
    // 4. loop through the sorted intervals
    while(sorted.length > 0) {
        const a = mergedIntervals.pop();
        const b = sorted.shift();
        const [aStart, aEnd] = a;
        const [bStart, bEnd] = b;

        // 5. Check those 4 scenarios
        if(aEnd < bStart) {
            mergeInterval.push(a)
            mergeInterval.push(b)
        } else {
            const c = []
            c[0] = aStart
            c[1] = Math.max(aEnd, bEnd)
            mergedIntervals.push(c)
        }
    }
  return newint
 }
 
 console.log("******************** Free interval *******************")
 console.log(findFreeTime([[[1,3], [5, 6]], [[2,3], [6,8]]])) // [[3,5]
 console.log(findFreeTime([[[1,3], [9, 12]], [[2,4], [6,8]]])) // [[4,6], [8,9]]
 console.log(findFreeTime([[[1,3], [2, 4]], [[3,5], [7,9]]])) // [[3,5]
 