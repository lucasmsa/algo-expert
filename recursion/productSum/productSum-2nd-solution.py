# I didn't know I could change the parameters of the 
# productSum function, hence, the redundancy in the first
# solution

def productSum(array, multiplier=1):
  totalSum = 0
  
  for element in array:
    if type(element) is list:
      totalSum += productSum(element, multiplier+1)
    else:
      totalSum += element
  
  return totalSum*multiplier 