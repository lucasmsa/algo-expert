export function spiralTraverse(array: number[][]) {
  const spiralArr = []
  let arraySize = array.length * array[0].length

  let row = 0, column = 0, i = 0

  let columnRightEnd = array[0].length - 1, rowEnd = array.length - 1
  let columnLeftEnd = 0, rowStart = 0

  while (i < arraySize) {

    spiralArr.push(array[row][column])
    column += 1
    i += 1

    if (column === columnRightEnd) {

      while (row < rowEnd) {
        spiralArr.push(array[row][column])
        row += 1
        i += 1
      }

      rowStart += 1
      rowEnd -= 1
      columnRightEnd -= 1

      while (column > columnLeftEnd) {
        spiralArr.push(array[row][column])
        column -= 1
        i += 1
      }

      columnLeftEnd += 1

      while (row > rowStart) {
        spiralArr.push(array[row][column])
        row -= 1
        i += 1
      }
    }
  }

  return spiralArr;
}
