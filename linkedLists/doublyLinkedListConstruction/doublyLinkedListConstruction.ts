export class Node {
  value: number;
  prev: Node | null;
  next: Node | null;

  constructor(value: number) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

export class DoublyLinkedList {
  head: Node | null;
  tail: Node | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  // O(1) Time | O(1) Space
  setHead(node: Node) {
    if (node.prev || node.next) {
			this.remove(node)
		}
		if (this.head) {
			this.head.prev = node
			node.next = this.head
			this.head = node
			this.head.prev = null
		} else {
			this.head = node
			this.tail = node
		}
  }

  // O(1) Time | O(1) Space
  setTail(node: Node) {
    if (node.prev || node.next) {
			this.remove(node)
		}
		if (this.tail) {
			this.tail.next = node
			node.prev = this.tail
			this.tail = node
			node.next = null
		} else {
			this.setHead(node)
		}
  } 
  
  // O(1) Time | O(1) Space
  insertBefore(node: Node, nodeToInsert: Node) {
    if (nodeToInsert.prev || nodeToInsert.next) {
      this.remove(nodeToInsert)
    }
		if ((node.next && node.prev) || (node.prev)) {
			nodeToInsert.prev = node.prev
			node.prev && (node.prev.next = nodeToInsert)
			node.prev = nodeToInsert
			nodeToInsert.next = node
		} else {
			this.setHead(nodeToInsert)
		}
  }

  // O(1) Time | O(1) Space
  insertAfter(node: Node, nodeToInsert: Node) {
    if (nodeToInsert.prev || nodeToInsert.next) {
      this.remove(nodeToInsert)
    }
		if ((node.next && node.prev) || (node.next)) {
			nodeToInsert.next = node.next
			node.next && (node.next.prev = nodeToInsert)
			node.next = nodeToInsert
			nodeToInsert.prev = node
		} else {
			this.setTail(nodeToInsert)
		}
  }

  // O(p) Time | O(1) Space -> Where p is the position the node will be inserted
  insertAtPosition(position: number, nodeToInsert: Node) {
    if (nodeToInsert.prev || nodeToInsert.next) {
      this.remove(nodeToInsert)
    } 
    let node = this.head
    let lastPosition = false
    let currentPosition = 1
    while(currentPosition <= position) {
      if (currentPosition === position) {
				if (node)	{
          node.prev && !lastPosition
          ? this.insertBefore(node.prev, nodeToInsert) 
          : this.insertBefore(node, nodeToInsert)
				} else {
          this.setHead(nodeToInsert)
        }
      }
      currentPosition += 1
      if (node && node.next) {
        node = node.next
      } else {
        lastPosition = true
      }
    }
  }

  // O(n) Time | O(1) Space
  removeNodesWithValue(value: number) {
    let node = this.head
    let nextNodeAfterRemoval: Node | null
    while (node) {
      if (node.value === value) {
        nextNodeAfterRemoval = node.next
        this.remove(node)
        node = nextNodeAfterRemoval
      } else {
        node = node.next
      }
    }
  }

  // O(1) Time | O(1) Space
  remove(node: Node) {
    if (node.prev && node.next) {
      node.prev.next = node.next
      node.next.prev = node.prev
    } else if (node.next) {
      node.next.prev = null
      this.head = node.next
    } else if (node.prev) {
      node.prev.next = null
      this.tail = node.prev
    } else {
      this.head = null
      this.tail = null
    }
  }

  // O(n) Time | O(1) Space
  containsNodeWithValue(value: number) {
    let node = this.head
    while (node) {
      if (node && node.value === value) return true
      node = node.next
    }
    return false
  }
}
