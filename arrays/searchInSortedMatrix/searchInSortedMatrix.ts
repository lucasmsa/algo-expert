type Range = [number, number];

export function searchInSortedMatrix(matrix: number[][], target: number): Range {
  const numberOfRows = matrix.length-1, numberOfColumns = matrix[0].length-1
  let row = 0
  let column = numberOfColumns

  while (column >= 0 && row <= numberOfRows) {
    if (matrix[row][column] === target) return [row, column]
    if (matrix[row + 1][column] > target) column -= 1
    else if (matrix[row + 1][column] <= target) row += 1
  }
  return [-1, -1];
}