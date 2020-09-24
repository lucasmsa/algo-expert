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

function nodeDepths(root: BinaryTree): number {
  const rootDepth = 0
  return nodeDepthsHelper(root, rootDepth)
}


function nodeDepthsHelper(root: BinaryTree | null, depth: number): number {
  if (root === null) return 0

  return depth + nodeDepthsHelper(root.left, depth + 1) + 
          nodeDepthsHelper(root.right, depth + 1)
}
