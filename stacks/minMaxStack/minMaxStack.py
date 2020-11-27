# All methods run in O(1) Time | O(1) Space
class MinMaxStack:
    def __init__(self):
        self.stack = []
        
    def peek(self):
        return self.stack[-1]['number']

    def pop(self):
        popped_value = self.stack.pop()
        return popped_value

    def push(self, number):
        minimum_number = self.getMin()
        maximum_number = self.getMax()
        
        if number < minimum_number or minimum_number is None:
            minimum_number = number
        if number > maximum_number or maximum_number is None:
            maximum_number = number

        self.stack.append(
            {"number": number, 
             "minimum": minimum_number,
             "maximum": maximum_number
            }
        )
            
    def getMin(self):
        if len(self.stack):
            return self.stack[-1]['minimum']
        return None
    
    def getMax(self):
        if len(self.stack):
            return self.stack[-1]['maximum']
        return None
