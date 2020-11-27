# All methods are O(1) Time | O(1) Space
class MinMaxStack:
    def __init__(self):
        self.top = None
        self.previous = None
    
    def peek(self):
        return self.top['value']

    def pop(self):
        popped_top = self.top
        self.top = None
        self.top = {
            "value": popped_top['previous']['value'],
            "previous": popped_top['previous']['previous'],
            "minimum": popped_top['previous']['minimum'],
            "maximum": popped_top['previous']['maximum']
        }
            

    def push(self, number):
        minimum_number = self.getMin()
        maximum_number = self.getMax()
		
        if minimum_number is None or number < minimum_number:
            minimum_number = number
        
        if maximum_number is None or number > maximum_number:
            maximum_number = number
        
        old_top = self.top
        self.top = {
            "value": number,
            "previous": old_top,
            "minimum": minimum_number,
            "maximum": maximum_number
        }
        
    def getMin(self):
        if self.top is not None:
            return self.top['minimum']
        else: 
            return None

    def getMax(self):
        if self.top is not None:
            return self.top['maximum']
        else:
            return None