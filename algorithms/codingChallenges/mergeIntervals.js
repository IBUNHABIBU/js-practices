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
console.log(mergeInterval([[1,4], [2,5], [7,9]])) // [[1,5], [7,9]]
console.log(mergeInterval([[6,7], [2,4], [5,9]])) // [[2,4], [5,9]]
console.log(mergeInterval([[1,4], [2,6], [3,5]])) // [[1,6]]
    
