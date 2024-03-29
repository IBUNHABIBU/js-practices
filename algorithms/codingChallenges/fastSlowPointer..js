/**
  The fast and slow pointer approacth aka the tortoise and hare approach is a
  pointer algorithm that uses two pointers which move through the array at 
  different speeds. This approach is quite useful for cyclic linked lists or arrays.
  By moving at different speeds, the algorithm proves that the two pointers are bound
    to meet. The fast pointer should move two steps while the slow pointer moves
     one step. If the linked list has a cycle, the fast pointer is sure to catch up
        with the slow pointer. If the list does not have a cycle, the fast pointer
        should be able to reach the end of the list.
 */

/* Problem 1: 
Given the head of singly linked list, write a function to 
determine if the linked list has a cycle in it or not.
*/
/*
   slow: 1 step
   fast: 2 steps

   All distance btn the two pointers reduce to 2 posibilities:
    1. The fast pointer is one step behind the slow pointer
    2. The fast pointer is two steps behind the slow pointer

    Two scenarios:
    * If the fast pointer is one step behind the slow pointer,
    the fast pointer moves two steps and the slow pointer moves one step, and they
    both meet at the same node.
    * If the fast pointer is two steps behind the slow pointer, the fast pointer moves
    two steps and the slow pointer moves one step. After the moves, the fast pointer will 
    be one step behind the slow pointer, which reduces this scenario to the first scenario.
    This means that the two pointers will meet in the next iteration.
 */

// Solution 1:

class Node {
  constructor(value, next= null) {
    this.value = value;
    this.next = next;
  }
}

const hasCycle = (head) => {
  let slow = head;
  let fast = head;

  // while the fast pointer is still in the linked list
  while(fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    // if the fast pointer is equal to the slow pointer, there is a cycle
    if(slow === fast) {
      return true;
    }
  }
  return false;
}

const node6 = new Node(6);
const node5 = new Node(5, node6);
const node4 = new Node(4, node5);
const node3 = new Node(3, node4);
const node2 = new Node(2, node3);
const head1 = new Node(1, node2);

// create a cycle for testing
node6.next = node3;

console.log(hasCycle(head1)); // true

// test case 2
const nodef = new Node('f');
const nodee = new Node('e', nodef);
const noded = new Node('d', nodee);
const nodec = new Node('c', noded);
const nodeb = new Node('b', nodec);
const head2 = new Node('a', nodeb);

// create a cycle for testing
nodef.next = nodec;

// Test case 3
const nodeYellow = new Node('yellow');
const nodeBlue = new Node('blue', nodeYellow);
const nodeGreen = new Node('green', nodeBlue);
const nodeRed = new Node('red', nodeGreen);
const nodeBlack = new Node('black', nodeRed);
const head3 = new Node('white', nodeBlack);

console.log("***************** Has a cycle **************")
console.log(hasCycle(head3)); // false

console.log(hasCycle(head2)); // true


/* Problem 2:
      Given an interger , write a function to detemine if after repeatedly 
      replacing it with an integer equal to the sum 
      of square of all of its digits, leads us to the number 1.
/*/

/* 
    Algorithm

*/

const squareDigitSumTo1 = (num) => {
  let slow = num, fast = num;
  while(true) {
    slow = findSquareSum(slow)
    fast = findSquareSum(findSquareSum(fast))

    if(slow === fast) return false;
    if(slow ===1 || fast === 1) return true;
  }
}

const findSquareSum = (num) => {
  let sum = 0
  while(num > 0) {
    let digit = num % 10
    sum += digit * digit;
    num = Math.floor(num/10)
  }
  return sum;
}

console.log("********************** Find square sum ************************")
console.log(squareDigitSumTo1(23))
console.log(squareDigitSumTo1(3))
console.log(squareDigitSumTo1(12))
console.log(squareDigitSumTo1(100))
console.log(squareDigitSumTo1(456))

/*
    Problem 3:
    You are given an array of both positive and negative numbers. Suppose the array 
    contains a number m at a particular index. If m is positive we will move 
    forward m indices if m is a negative move backward m indeces.
    Write a method to determine if the array has a cycle. 

    Note: The cycle should have more than one element and should follow one direction 
    which means the cycle should not contain both forward and backward movement.
*/

const circularArray = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    let slow = i, fast = i;

    const isFoward = arr[i] > 0

    while(true) {
      // move slow pointer 1 time
      // move fast pointer 2 times

      slow = findNextIndex(arr, isFoward, slow)
      fast = findNextIndex(arr, isFoward, fast)
      if(fast !== -1){
        fast = findNextIndex(arr, isFoward, fast)
      }

      if(fast === -1 || slow === -1 || slow === fast) break;

      if(fast !== -1 && slow !== -1 && slow === fast) return true;
    }
  }

  return false;
}

const findNextIndex = (arr, isFoward, currIndex) => {
  const currIsForward = arr[currIndex] > 0

  // if next direction is different than the current direction
  // there is no cycle return false
  if (currIsForward !== isFoward) {
    return -1;
  }

  const nextIndex = (currIndex + arr[currIndex]) % arr.length;

  if(nextIndex < 0 ) {
    nextIndex += arr.length;
  } 

  // we don't go anywhere can't have 1 element in a cycle
  if(nextIndex === currIndex) {
    return -1;
  }

  return nextIndex;
}

console.log("************* CICRULAR ARRAY *********************")
console.log(circularArray([1,2,-1,2,2]))
console.log(circularArray([2,2,-1,2]))
console.log(circularArray([2,1,-1,2]))
