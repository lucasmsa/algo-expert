# O(n^2) Time | O(n) Space
def longestPalindromicSubstring(string):
  position_possible_palindrome = []
  possible_palindrome_substrings = set()
  longest_substring = {
    'string': '',
    'length': 1
  }
  
  for i in range(len(string)):
    character_found = False
    character = string[i]
    for j in range(len(string) - 1, i, -1):
      if string[j] == character:
        character_found = True
        position_possible_palindrome.append(j)
        break
    if not character_found: position_possible_palindrome.append(None)
    
  for i in range(len(position_possible_palindrome)):
    if position_possible_palindrome[i]:
      substring = []
      for j in range(i, position_possible_palindrome[i] + 1):
        substring.append(string[j])
      possible_palindrome_substrings.add(''.join(substring))
  
  for substring in possible_palindrome_substrings:
    if isPalindrome(substring): 
      if len(substring) > longest_substring['length']:
        longest_substring['string'] = substring
        longest_substring['length'] = len(substring)

  return longest_substring['string']

# O(n) Time | O(1) Space
def isPalindrome(string):
  left_pointer = 0
  right_pointer = len(string) - 1
  
  while left_pointer <= right_pointer:
    if string[left_pointer] == string[right_pointer]:
      left_pointer += 1
      right_pointer -= 1
           
    else: return False
  
  return True

print(longestPalindromicSubstring("abaxyzzyxf"))