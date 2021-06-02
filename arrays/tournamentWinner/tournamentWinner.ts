interface ILanguageScore {
  [language: string]: number
}

// O(n) Time | O(WT) Space
// Where n is the number of matches played and WT is the number of Winning Teams
function tournamentWinner(competitions: string[][], results: number[]) {
  const languageScore = {} as ILanguageScore
  const bestTeam = {
    name: "",
    score: 0
  }
  for (let idx = 0; idx < results.length; idx++) {
    const [homeTeam, awayTeam] = competitions[idx]
    const winningTeam = results[idx] === 1 ? homeTeam : awayTeam

    languageScore[winningTeam] = languageScore[winningTeam] + 3 || 3
    if (languageScore[winningTeam] > bestTeam.score) {
      bestTeam.name = winningTeam
      bestTeam.score = languageScore[winningTeam]
    }
  }

  return bestTeam.name;
}