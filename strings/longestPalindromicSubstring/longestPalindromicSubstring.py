# O(n^2) Time | O(n) Space
def longestPalindromicSubstring(string: str):
    if len(string) == 1:
        return string
    possible_palindromic_substrings = set()
    longest_palindrome = {
        "substring": '',
        "length": 0
    }

    for idx_1 in range(len(string)):
        for idx_2 in range(len(string) - 1, 0, -1):
            if string[idx_1] == string[idx_2]:
                possible_palindromic_substrings.add(string[idx_1:idx_2+1])

    for possible_palindrome in possible_palindromic_substrings:
        if isPalindrome(possible_palindrome) and len(possible_palindrome) > longest_palindrome['length']:
            longest_palindrome['substring'] = possible_palindrome
            longest_palindrome['length'] = len(possible_palindrome)

    return longest_palindrome['substring']


def isPalindrome(string: str):
    if not len(string):
        return False

    left_pointer = 0
    right_pointer = len(string) - 1

    while left_pointer < right_pointer:
        if string[left_pointer] == string[right_pointer]:
            left_pointer += 1
            right_pointer -= 1
        else:
            return False

    return True
