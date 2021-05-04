interface ILettersPosition {
  [letter: string]: number
}

// O(n) Time | O(1) Space -> Because the object used to store the letters will be at most 26 of length. It doesn't depend on (n)
export function firstNonRepeatingCharacter(string: string) {
  const lettersPosition: ILettersPosition = {}
  let minimumNonRepeatingIdx = Number.POSITIVE_INFINITY

  for (let i = 0; i < string.length; i++) {
    let letter = string[i]
    if (letter in lettersPosition) {
      lettersPosition[letter] = Number.POSITIVE_INFINITY
    } else {
      lettersPosition[letter] = i
    }
  }

  for (let letter in lettersPosition) {
    minimumNonRepeatingIdx = lettersPosition[letter] && Math.min(minimumNonRepeatingIdx, lettersPosition[letter])
  }

  return minimumNonRepeatingIdx !== Number.POSITIVE_INFINITY ? minimumNonRepeatingIdx : -1
}