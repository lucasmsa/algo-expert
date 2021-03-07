// O(n) Time | O(1) Space
export function isMonotonic(array: number[]) {
  let increasingMonotonic = true, decreasingMonotonic = true, currentValue = array[0]
  for (let i = 1; i < array.length; i++) {
    if (array[i] > currentValue) {
      decreasingMonotonic = false
      currentValue = array[i]
    } else if (array[i] < currentValue) {
      increasingMonotonic = false
      currentValue = array[i]
    }
    if (!increasingMonotonic && !decreasingMonotonic) break
  }
  return increasingMonotonic || decreasingMonotonic;
}