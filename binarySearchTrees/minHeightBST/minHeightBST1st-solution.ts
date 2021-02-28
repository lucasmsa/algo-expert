// O(nlog(n)) Time | O(n) Space, Where n is the number of nodes of the tree (or values of the array) 
// that will be  generated from the input array, nlogn because it's traversing the BST to insert the
// node for every insertion
export function minHeightBst(array: number[]) {
  let middleIdx = Math.floor((array.length-1)/2)
  let bst = new BST(array[middleIdx])
	if (array.length > 2) { 
		exploreTreeNode(bst, array, 0, middleIdx - 1)
		exploreTreeNode(bst, array, middleIdx + 1, array.length - 1)
	} else if (array.length > 1) bst.insert(array[1])
  return bst
}

function exploreTreeNode(bst: BST, array: number[], left: number, right: number) {
  if (left > right) return 
	let middleIdx = Math.floor((left + right)/2)
  bst.insert(array[middleIdx])
  exploreTreeNode(bst, array, left, middleIdx - 1)
	exploreTreeNode(bst, array, middleIdx + 1, right)
}

export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value: number) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}