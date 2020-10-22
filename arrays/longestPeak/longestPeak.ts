// O(n) Time | O(1) Space
function longestPeak(array: number[]) {
  let longest = 0, possibleLongest = 0, peak = false

  for (let i = 0; i < array.length; i++) {
    if ((array[i + 1] > array[i]) && !peak) {
      possibleLongest += 1
    }

    else if ((array[i + 1] < array[i]) && (possibleLongest > 0)) {
      peak = true
      possibleLongest += 1
    }

    else {
      (possibleLongest > longest && possibleLongest > 1 && peak) 
      && (longest = possibleLongest + 1)

      array[i + 1] > array[i] ? possibleLongest = 1 : possibleLongest = 0
      
      peak = false
    }
  }

  return longest
}
