# This is an input class. Do not edit.
class BST:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

def findKthLargestValueInBst(tree, k):
    current = tree
    stack = []
    number_of_pops = 0

    while True:
        if current is not None:
            stack.append(current)
            current = current.right
        elif(stack):
            current = stack.pop()
            number_of_pops += 1
            if number_of_pops == k: return current.value
            current = current.left 
