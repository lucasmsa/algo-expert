import math

def findThreeLargestNumbers(array):
  largestNumbers = [-math.inf, -math.inf, -math.inf]
  for number in array:
    smallestLargeNumberIndex = largestNumbers.index(min(largestNumbers))

    if number > largestNumbers[smallestLargeNumberIndex]:
      largestNumbers[smallestLargeNumberIndex] = number
      
  return sorted(largestNumbers)

print(findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]))