def productSum(array):
  totalSum = 0
  
  for element in array:
    if type(element) is list:
      totalSum += 2*productSumHelper(element, 2)
    else:
      totalSum += element
  
  return totalSum

def productSumHelper(array, multiplier):
  
  totalSum = 0
  
  for item in array:
    if type(item) is list:
      totalSum += productSumHelper(item, multiplier + 1)
    else:
      totalSum += item
  
  return totalSum * multiplier if multiplier > 2 else totalSum

