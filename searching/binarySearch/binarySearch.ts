function binarySearch(array: number[], target: number, left = 0, right = array.length - 1): number {
  const breakPoint = Math.round((left + right)/2)

  if(left === right && target != array[breakPoint]) {
    return -1
  }

  if(target > array[breakPoint]) {
    return binarySearch(array, target, left = breakPoint + 1, right = right)
  }

  else if (target < array[breakPoint]) {
    return binarySearch(array, target, left = left, right = breakPoint - 1)
  }

  else {
    return breakPoint
  }
}