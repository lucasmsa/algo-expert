import math

def findThreeLargestNumbers(array):
  largestNumbers = {
    'first': -math.inf,
    'second': -math.inf,
    'third': -math.inf
  }
  
  for number in array:
    smallestLargeNumberIndex = min(largestNumbers, key=lambda k: largestNumbers[k])
    
    if number > largestNumbers[smallestLargeNumberIndex]:
      largestNumbers[smallestLargeNumberIndex] = number
      
  return sorted(list(largestNumbers.values()))