type Triplet = [number, number, number];

// O(n^2) Time | O(n) Space 
export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
  array.sort((n1,n2) => n1 - n2);

  let center = 1
  let right = array.length - 1
  let tripletsAnswer = [] as Triplet[]

  for (let i = 0; i < array.length - 2; i++) {
      center = i + 1
      right = array.length - 1

      while (center < right) {
        if (targetSum < array[right] + array[i] + array[center]) {
          right -= 1
        } else if (targetSum > array[i] + array[right] + array[center]) {
          center += 1
        } else {
          let triplet = [array[i], array[center], array[right]] as Triplet
          tripletsAnswer.push(triplet)
          center += 1
          right -= 1
      }
    }
  }
  return tripletsAnswer;
}