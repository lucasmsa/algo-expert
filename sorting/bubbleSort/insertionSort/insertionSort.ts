function insertionSort(array: number[]) {
	for(let i = 1; i < array.length; i++) {
		for(let j = i - 1; j >= 0; j--) {
      if(array[j] > array[j + 1]) swap(array, j, j + 1)
      else break
    }
	}
  return array;
}

function swap(array: number[], i: number, j: number) {
  let temp = array[j]
  array[j] = array[i]
  array[i] = temp
}