function isValidSubsequence(array: number[], sequence: number[]) {
  array.every((number) => {
      const firstSequenceDigit = sequence[0]

      number === firstSequenceDigit && sequence.shift()
      
      return !firstSequenceDigit ? false : true
  })
 return sequence.length ?  false : true
}