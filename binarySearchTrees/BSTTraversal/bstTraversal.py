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