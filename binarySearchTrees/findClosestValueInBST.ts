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

interface IClosestValues {
  node: number,
  difference: number
}

function findClosestValueInBst(tree: BST, target: number) {

    const closestValue = {
      node: tree.value,
      difference: Math.abs(tree.value - target)
    } as IClosestValues

    let rootDifference: number

    while (tree) {

      rootDifference = Math.abs(tree.value - target)

      if(rootDifference < closestValue.difference){
        closestValue.node = tree.value
        closestValue.difference = rootDifference
      }

      if(target < tree.value) {
        if (tree.left) tree = tree.left
        else break

      } else if (target > tree.value) {
          if (tree.right) tree = tree.right
          else break

      } else {
        return tree.value
      }
    }
  return closestValue.node
}