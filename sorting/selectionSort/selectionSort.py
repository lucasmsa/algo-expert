# Average case
# O(n^2) time | O(1) space
def selectionSort(array: list):
  for i in range(len(array) - 1):
    j = i + 1
    swapIdx = i
    
    while j < len(array):
      if array[j] < array[swapIdx]:
        swapIdx = j
      j += 1
    
    if swapIdx != i:
      swap(array, i, swapIdx)
    
  return array
  
def swap(array: list, i: int, j: int):
  array[i], array[j] = array[j], array[i]