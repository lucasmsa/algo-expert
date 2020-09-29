function binarySearch(array: number[], target: number, left = 0, right = array.length - 1): number {
  let breakPoint: number

  while (true){
      breakPoint = Math.round((left + right)/2)

      if(left === right && target != array[breakPoint]) {
        return -1
      }

      if(target > array[breakPoint]) {
        left = breakPoint + 1
      }

      else if (target < array[breakPoint]) {
        right = breakPoint - 1
      }

      else {
        return breakPoint
      }
  }
}
