// O(n) Time | O(d) Space -> because of the call stack, 
// where n is the number of nodes and d is the tree's depth
class BST {
    value: number;
    left: BST | null;
    right: BST | null;
  
    constructor(value: number) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  export function validateBst(tree: BST) {
    return validateBstHelper(tree, -Infinity, Infinity)
  }
  
  function validateBstHelper(tree: BST | null, lowerBound=-Infinity, upperBound=Infinity): boolean {
    if (!tree) return true
    if (tree.value < lowerBound || tree.value >= upperBound) return false
    
    if (!validateBstHelper(tree.left, lowerBound, tree.value)) return false
    if (!validateBstHelper(tree.right, tree.value, upperBound)) return false
  
    return true
  }
  