# O(n) Time | O(1) Space
def maxSubsetSumNoAdjacent(array:list):
    if not array: return 0
    
    maximum_sum = {
        'current': array[0],
        'idx - 1': 0,
        'idx - 2': 0
    }
    
    for idx in range(1, len(array)):
        if idx == 1:
            maximum_sum['idx - 2'] = maximum_sum['current']
            maximum_sum['current'] = max(maximum_sum['current'], array[idx])
            maximum_sum['idx - 1'] = maximum_sum['current']
        else:
            maximum_sum['current'] = max(maximum_sum['idx - 2'] + array[idx], maximum_sum['idx - 1'])
            maximum_sum['idx - 2'] = maximum_sum['idx - 1']
            maximum_sum['idx - 1'] = maximum_sum['current']
                      
    return maximum_sum['current']