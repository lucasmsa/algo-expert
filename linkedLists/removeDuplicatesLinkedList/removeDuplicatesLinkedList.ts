export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

// O(n) Time | O(1) Space -> Where (n) is the length of the Linked List
export function removeDuplicatesFromLinkedList(linkedList: LinkedList) {
  let nodeValue = linkedList.value
	let previousNode = linkedList || null
	let currentNode = linkedList.next || null
	
	while(currentNode) {
		if (currentNode.value === nodeValue) {
			previousNode.next = currentNode.next
			currentNode.next = null
			currentNode = previousNode.next
		} else {
			nodeValue = currentNode.value
			if (currentNode) previousNode = currentNode
			currentNode = currentNode.next
		}
	}
	
	return linkedList
}
