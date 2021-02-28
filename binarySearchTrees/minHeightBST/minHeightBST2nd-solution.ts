// O(n) Time | O(n) Space, Where n is the number of nodes of the tree (or values of the array) 
// that will be  generated from the input array
export function minHeightBst(array: number[]) {
  return exploreTreeNode(array, 0, array.length -1)
}

function exploreTreeNode(array: number[], left: number, right: number) {
  if (left > right) return null
  let middleIdx = Math.floor((left + right) / 2)
  let bst = new BST(array[middleIdx])
  bst.left = exploreTreeNode(array, left, middleIdx - 1)
  bst.right = exploreTreeNode(array, middleIdx + 1, right)
  return bst
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
