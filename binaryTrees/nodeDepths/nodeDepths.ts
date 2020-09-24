class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function nodeDepths(root: BinaryTree) {
  const depthSum: number[] = []
  const sum = 0
  return nodeDepthsHelper(root, depthSum, sum)
}

function nodeDepthsHelper(root: BinaryTree, depthSum: number[], sum: number) {

  depthSum.push(sum)

  if (root.left) {
    nodeDepthsHelper(root.left, depthSum, sum + 1)
  } 

  if (root.right) {
    nodeDepthsHelper(root.right, depthSum, sum + 1)
  }

  return depthSum.reduce((a, b) => a + b, 0)
}