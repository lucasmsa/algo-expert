// Average case
// O(n^2) time | O(1) space
// Best case
// O(n) time | O(1) space
function bubbleSort(array: number[]) {
  let swaps = false;
  let arrayIterations = array.length - 1

  while(true){ 

    for (let idx = 0; idx < arrayIterations; idx++) {
      if(array[idx] > array[idx + 1]) {
        swap(array, idx)
        swaps = true
      }
    }

    if (swaps === false) {
      return array
    }
    
    swaps = false
    arrayIterations -= 1
  }
}

function swap(array: number[], index: number) {
    let temp = array[index]
    array[index] = array[index + 1]
    array[index + 1] = temp
}