// O(n) time | O(1) space
export function isPalindrome(string: string) {
  for (let i = 0; i < string.length; i++) {
    let leftIdx = i
    let rightIdx = string.length - (1 + i)

    if (leftIdx === rightIdx) break
    if (string[leftIdx] !== string[rightIdx]) return false
  }

  return true;
}

