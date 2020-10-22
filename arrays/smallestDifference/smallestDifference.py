# O(nlog(n) + mlog(m)) Time | O(1) Space
def smallestDifference(arrayOne: list, arrayTwo: list):
    arrayOne.sort()
    arrayTwo.sort()
    
    arrayOnePointer = 0
    arrayTwoPointer = 0
    possible_best = []
    
    while arrayOnePointer < len(arrayOne) and arrayTwoPointer < len(arrayTwo):
        arrOneItem = arrayOne[arrayOnePointer]
        arrTwoItem = arrayTwo[arrayTwoPointer]
        
        if abs(arrOneItem - arrTwoItem) == 0:
            return [arrOneItem, arrTwoItem]
        
        else: 
            if arrOneItem < arrTwoItem:
                arrayOnePointer += 1
            else: 
                arrayTwoPointer += 1

            if not len(possible_best) or (abs(arrOneItem - arrTwoItem) < abs(possible_best[0] - possible_best[1])):
                possible_best = [arrOneItem, arrTwoItem]
        
    return possible_best    