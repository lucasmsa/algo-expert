export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

// O(n + m) Time | O(digits(n + m)), where n represents the length of the first linked list
// and m the length of the second.  
export function sumOfLinkedLists(linkedListOne: LinkedList, linkedListTwo: LinkedList) {
	let totalSum = (linkedListToInteger(linkedListOne) + linkedListToInteger(linkedListTwo)).toString()
	let newLinkedListHead = new LinkedList(parseInt(totalSum[totalSum.length - 1]))
	if (totalSum.length > 1) {
		let nextNode = new LinkedList(parseInt(totalSum[totalSum.length - 2]))
		newLinkedListHead.next = nextNode
		for (let i = totalSum.length - 3; i >= 0; i--) {
			nextNode.next = new LinkedList(parseInt(totalSum[i]))
			nextNode = nextNode.next
		}
	} 
	
  return newLinkedListHead
}

// O(n) Time | O(n) Space, where n is the size of the linked list
function linkedListToInteger(linkedList: LinkedList) {
	let linkedListQueue = []
	let currentNode = linkedList as LinkedList | null
	
	while (currentNode) {
		linkedListQueue.unshift(currentNode.value)
		currentNode = currentNode.next
	}
	
	return queueToInteger(linkedListQueue)
}

// O(1) Time | O(1) Space
function queueToInteger(queue: Array<Number>) {
	return parseInt(queue.join(''))
}