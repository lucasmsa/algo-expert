// O(n) Time | O(n) space -> Because of the stack
export function balancedBrackets(string: string) {
  let openingBracket = /\[|\{|\(/
  let closingBrackets = /\}|\)|\]/
  let stack = [] as string[]
	
  for (let i = 0; i < string.length; i++) {
    if (openingBracket.test(string[i])) stack.push(string[i])

    else if (closingBrackets.test(string[i])) {
      if (!stack.length) return false
      switch (stack.pop()) {
        case "{":
          if (!(/\}/.test(string[i]))) return false
          break
        case "(":
          if (!(/\)/.test(string[i]))) return false
          break
        case "[":
          if (!(/\]/.test(string[i]))) return false
          break
      }
    }
  }
  if (stack.length) return false
  return true
}