class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def insert(self, value):
        while self:
            if value >= self.value:
                if self.right:
                    self = self.right
                else:
                    self.right = BST(value)
                    return self

            else:
                if self.left:
                    self = self.left
                else:
                    self.left = BST(value)
                    return self
        
    def contains(self, value):
        while self:
            if value > self.value:
                if self.right:
                    self = self.right
                else:
                    return False
                  
            elif value < self.value:
                if self.left:
                    self = self.left
                else: 
                    return False
                
            else:
                return True

    def remove(self, value, parent_node=None):
        current_node = self
        
        while current_node:
            if value > current_node.value:
                parent_node = current_node
                current_node = current_node.right
                
            elif value < current_node.value:
                parent_node = current_node
                current_node = current_node.left
                
            else:
                if current_node.left and current_node.right:
                    min_node = current_node.right
                    while min_node:
                        if min_node.left:
                            min_node = min_node.left
                        else:
                            break
                    current_node.value = min_node.value
                    current_node.right.remove(current_node.value, current_node)
				
                elif not parent_node:
                    if current_node.left:
                        current_node.value = current_node.left.value
                        current_node.right = current_node.left.right
                        current_node.left = current_node.left.left
                    elif current_node.right:
                        current_node.value = current_node.right.value
                        current_node.left = current_node.right.left
                        current_node.right = current_node.right.right
                    else:
                        pass
					
                elif parent_node.left == current_node:
                    if current_node.left:
                        parent_node.left = current_node.left
                    elif current_node.right:
                        parent_node.left = current_node.right
                    else: parent_node.left = None
						
                elif parent_node.right == current_node:
                    if current_node.left:
                        parent_node.right = current_node.left
                    elif current_node.right:
                        parent_node.right = current_node.right
                    else: parent_node.right = None
                break
        return self