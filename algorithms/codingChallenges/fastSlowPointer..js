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

