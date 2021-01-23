# O(n) Time | O(1) Space
def hasSingleCycle(array):
    iterations = 0
    idx = 0

    while True:
        if array[idx] == None:
            if iterations == (len(array)) and idx == 0:
                return True
            else:
                return False
        idxValue = array[idx]
        array[idx] = None
        idx += idxValue
        
        if idx > len(array)-1 or idx < 0:
            idx = idx%len(array)
            
        iterations += 1
        
print(hasSingleCycle([3, 3, 1, -4, -4, 2]))
