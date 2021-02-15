export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

// O(max(n + m)) Time | O(digits(n + m)), where n represents the length of the first linked list
// and m the length of the second. Difference from this solution to the 1st one is that only 
// one iteration through both linked lists was needed
export function sumOfLinkedLists(linkedListOne: LinkedList, linkedListTwo: LinkedList) {
  let currentNodeOne = linkedListOne as LinkedList | null
  let currentNodeTwo = linkedListTwo as LinkedList | null
  let newLinkedList = {
    'head': new LinkedList(0),
    'next': new LinkedList(0)
  }, currentNodeNew = new LinkedList(0)
  let carry = 0, sum = 0, digit = 0, head = true
	
  while (currentNodeOne || currentNodeTwo) {
    if (currentNodeOne && currentNodeTwo) {
      sum = currentNodeOne.value + currentNodeTwo.value + carry
      currentNodeOne = currentNodeOne.next
      currentNodeTwo = currentNodeTwo.next
    } else if (currentNodeOne) {
      sum = currentNodeOne.value + carry
      currentNodeOne = currentNodeOne.next
    } else if (currentNodeTwo) {
      sum = currentNodeTwo.value + carry
      currentNodeTwo = currentNodeTwo.next
    }
    if (sum > 9) {
      carry = parseInt(sum.toString()[0])
      digit = parseInt(sum.toString()[1])
    } else {
      carry = 0
      digit = sum
    }
    if (head) {
      newLinkedList['head'] = new LinkedList(digit)
      head = false
    } else {
      newLinkedList['next'] = new LinkedList(digit)
      if (!newLinkedList['head'].next) {
        newLinkedList['head'].next = newLinkedList['next']
        currentNodeNew = newLinkedList['next']
      } else {
        currentNodeNew.next = new LinkedList(digit)
        currentNodeNew = currentNodeNew.next
      }
    }
  }
  
  return currentNodeNew['head']
}