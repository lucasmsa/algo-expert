// O(n) Time | O(1) Space
function moveElementToEnd(array: number[], toMove: number) {
  let left = 0 
  let right = array.length - 1

  while (left < right) {

    if (array[right] === toMove) {   
      right -= 1
    }

    else if (array[left] === toMove && array[right] !== toMove) {
      swap(array, left, right)
    }

    else if (array[left] !== toMove) {
      left += 1
    }
  }

  return array
}

function swap(array: number[], i: number, j: number) {
  let temp = array[i]
  array[i] = array[j]
  array[j] = temp 
}

moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2)