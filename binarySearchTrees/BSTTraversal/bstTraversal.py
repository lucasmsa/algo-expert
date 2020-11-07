# O(n) Time 
# O(n) Space -> Because the answer is an array with all BST node values, 
# however if the answer didn't involve storing values it would be
# O(d) Space -> Where d is the depth of the binary tree, because of the call stack
def inOrderTraverse(tree, array):
  if tree:
    inOrderTraverse(tree.left, array)
    array.append(tree.value)
    inOrderTraverse(tree.right, array)
  else: return

  return array

def preOrderTraverse(tree, array):
  if tree:
    array.append(tree.value)
    preOrderTraverse(tree.left, array)
    preOrderTraverse(tree.right, array)
  else: return

  return array


def postOrderTraverse(tree, array):
  if tree:
    postOrderTraverse(tree.left, array)
    postOrderTraverse(tree.right, array)
    array.append(tree.value)
  else: return

  return array