function bubbleSort(array: number[]) {
  let swaps = 0;
  let arrayIterations = array.length

  while(true){ 

    for (let idx = 0; idx < arrayIterations; idx++) {
      if(array[idx] > array[idx + 1]) {
        swap(array, idx)
        swaps += 1
      }

      if (idx === arrayIterations - 1 && swaps === 0) {
          return array
      }
    }

    swaps = 0
    arrayIterations -= 1
  }
}

function swap(array: number[], index: number) {
    let temp = array[index]
    array[index] = array[index + 1]
    array[index + 1] = temp
}