# This is an input class. Do not edit.
class LinkedList:
    def __init__(self, value):
        self.value = value
        self.next = None

# O(n) Time | O(1) Space
def removeKthNodeFromEnd(head, k):
	current_node = head
	linked_list_size = 0
	while current_node:
		current_node = current_node.next
		linked_list_size += 1
	current_node = head
	previous_node = None
	next_node = None
	kth_node_position = linked_list_size - k
	idx = 0
	while idx < kth_node_position:
		if idx == kth_node_position - 1:
			previous_node = current_node
		current_node = current_node.next
		idx += 1
		
	if idx == 0: 
		head.value = current_node.next.value
		head.next = current_node.next.next
	else:
		next_node = current_node.next
		current_node.next = None
		previous_node.next = next_node