import math

def findThreeLargestNumbers(array):
  largestNumbers = [-math.inf, -math.inf, -math.inf]
  for number in array:
    smallestLargeNumberIndex = largestNumbers.index(min(largestNumbers))

    if number > largestNumbers[smallestLargeNumberIndex]:
      largestNumbers[smallestLargeNumberIndex] = number
      
  return sorted(largestNumbers)
