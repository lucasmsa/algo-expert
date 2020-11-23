export function runLengthEncoding(string: string) {
	let characterOcurrences = 1;
	let currentCharacter = string[0]
  let answer = [] as string[];

	for(let i = 1; i < string.length; i++) {
		currentCharacter = string[i]
		if (characterOcurrences === 9 || currentCharacter !== string[i-1]) {
        answer.push(`${characterOcurrences}${string[i-1]}`)
        characterOcurrences = 0
    }
		characterOcurrences++
  }

	answer.push(`${characterOcurrences}${currentCharacter}`)

  return answer.join('')
}
