interface ILanguageScore {
  [language: string]: number
}

// O(n) Time | O(T) Space
// Where n is the number of matches played and T is the number of Winning Teams
function tournamentWinner(competitions: string[][], results: number[]) {
  const languageScore = {} as ILanguageScore
  for (let idx = 0; idx < results.length; idx++) {
    const [homeTeam, awayTeam] = competitions[idx]
    const winningTeam = results[idx] === 1 ? homeTeam : awayTeam

    languageScore[winningTeam] = languageScore[winningTeam] + 3 || 3
  }

  return Object.keys(languageScore).reduce((a, b) => languageScore[a] > languageScore[b] ? a : b);
}