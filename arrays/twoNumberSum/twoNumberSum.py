def twoNumberSum(array, targetSum):
  numbersDict = set()
  
  for number in array: 
    numbersDict.add(number)
    differenceToSum = targetSum - number
    
    if differenceToSum != number and differenceToSum in numbersDict:
      return [number, differenceToSum]
    
  return []
