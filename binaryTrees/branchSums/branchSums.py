class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def branchSums(root: BinaryTree):
	sumsArray = []   
	return branchSumsHelper(root, root.value, sumsArray)
    
def branchSumsHelper(root: BinaryTree, branchSum: int, sumsArray: list):

	if root.left:
		branchSumsHelper(root.left, branchSum + root.left.value, sumsArray)   

	if root.right:
		branchSumsHelper(root.right, branchSum + root.right.value, sumsArray)

	if root.left is None and root.right is None:
		sumsArray.append(branchSum)

	return sumsArray
